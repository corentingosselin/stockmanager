// app tinder features
import { DEFAULT_PROFILES } from "./profiles.js";

// ajouter au moins 10 profils
const profiles = [];
 
function isProfileExisting(email) {
  const existingProfile = profiles.find((p) => p.email === email);
  if (existingProfile) {
    return true;
  }
  return false;
}

function getProfile(email) {
  const existingProfile = profiles.find((p) => p.email === email);
  if (existingProfile) {
    return existingProfile;
  }
  return null;
}

//un profile avec un email banni ne peut pas être ajouté
function addProfile(profile) {
  //check if profile already exists with email
  const existingProfile = getProfile(profile.email);
  if (existingProfile && existingProfile.banned) {
    console.log("Profile is banned");
    return;
  }
  if (existingProfile) {
    console.log("Profile already exists");
    return;
  }
  profiles.push(profile);
}

function removeProfile(email) {
  const existingProfile = getProfile(email);
  if (!existingProfile) {
    console.log("Profile doesn't exist");
    return;
  }
  profiles.pop(existingProfile);
}

function displayProfile(profile) {
  //destructuring
  const { name, gender, age, bio, genderTarget } = profile;
  const message = `Nom: ${name}, Age: ${age}, Bio: ${bio},Genre: ${gender}, Genre recherché: ${genderTarget}`;
  console.log(message);
}

/**
 * afficher uniquement les profils qui n'ont pas été bannis,
 * afficher uniquement le nom, l'age et la bio et le genre recherché
 */
function displayAllProfiles() {
  const filteredProfiles = profiles.filter((p) => !p.banned);
  filteredProfiles.forEach((p) => {
    displayProfile(p);
    console.log("-----");
  });
}

const hasNearScore = (profile, targetProfile) => {
  return Math.abs(profile.score - targetProfile.score) <= 1;
};

const hasPreferencesInCommon = (profile, targetProfile) => {
  return targetProfile.preferences.some((pref) =>
    profile.preferences.includes(pref)
  );
};

// afficher les profiles qui ont un score similaire à 1 points près
// exemple si mon profile x a un score de 5, afficher les profiles qui ont un score entre 4 et 6
// également prendre en compte le genre recherché
// également prendre en compte les préférences (il faut minimum 1 préférence en commun)
function displayPossibleMatches(profileEmail, profileNumber = 3) {
  const profile = getProfile(profileEmail);
  if (!profile) {
    console.log("Profile doesn't exist");
    return;
  }
  const filteredProfiles = profiles
    .filter((p) => !p.banned)
    .filter(
      (p) =>
        p.gender === profile.genderTarget && profile.gender === p.genderTarget
    )
    .filter((p) => hasPreferencesInCommon(profile, p))
    .filter((p) => hasNearScore(profile, p))
    .filter((p) => p.email !== profile.email)
    .slice(0, profileNumber);

  if (filteredProfiles.length === 0) {
    console.log("No matches found");
    return;
  }

  console.log("List of possible matches: ");
  filteredProfiles.forEach((p) => {
    displayProfile(p);
    console.log("-----");
  });
}

// Matcher 2 profiles
function matchProfiles(email, targetEmail) {
  const profile = getProfile(email);
  const targetProfile = getProfile(targetEmail);
  if (!profile || !targetProfile) {
    console.log("Profile doesn't exist");
    return;
  }
  if (profile.banned || targetProfile.banned) {
    console.log("Profile is banned");
    return;
  }
  if (!hasNearScore(profile, targetProfile)) {
    console.log("Profiles don't have similar scores");
    return;
  }
  if (
    !targetProfile.preferences.some((pref) =>
      profile.preferences.includes(pref)
    )
  ) {
    console.log("Profiles don't have similar preferences");
    return;
  }
  profile.matches.push(targetProfile.email);
  targetProfile.matches.push(profile.email);
}

// Refuser un profile, le score du profile est diminué de 1
function refuseProfile(profile) {
  if (profile.score === 0) {
    return;
  }
  profile.score--;
}

function displayMyMatches(email) {
  const profile = getProfile(email);
  if (!profile) {
    console.log("Profile doesn't exist");
    return;
  }
  console.log("List of matches: ");
  profile.matches.forEach((email) => {
    const match = getProfile(email);
    displayProfile(match);
    console.log("-----");
  });
}

// Bannir un profile
function banProfile(email) {
  const profile = getProfile(email);
  if (!profile) {
    console.log("Profile doesn't exist");
    return;
  }
  if (profile.banned) {
    console.log("Profile is already banned");
    return;
  }
  profile.banned = true;
}

//addProfile(exampleProfile);
//removeProfile("john@gmail.com");
//console.log(profiles);
//displayAllProfiles();

DEFAULT_PROFILES.forEach((p) => addProfile(p));
displayAllProfiles();

displayPossibleMatches("alice@gmail.com");

matchProfiles("alice@gmail.com", "david@gmail.com");
displayMyMatches("alice@gmail.com");
