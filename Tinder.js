// app tinder features

// ajouter au moins 10 profils
const profiles = [];
const bannedEmails = [];
const exampleProfile = {
    name: "John Doe",
    email: "john@gmail.com",
    gender: "Male",
    genderTarget: "Female",
    matches: [], //liste d'email
    banned: false,
    age: 18,
    bio: "I like to code",
    preferences: ["tennis","pizza","voyages"],
    score: 0
}

//un profile avec un email banni ne peut pas être ajouté
function addProfile(profile) {
    if (!profile.banned && !bannedEmails.includes(profile.email)) {
        profiles.push(profile);
        console.log(`Profile with email ${profile.email} added.`);
    } else {
        console.log(`Cannot add a banned or duplicate profile with email ${profile.email}.`);
    }
}

function removeProfile(email) {
    const index = profiles.findIndex(profile => profile.email === email);
    if (index !== -1) {
        profiles.splice(index, 1);
        console.log(`Profile with email ${email} removed.`);
    } else {
        console.log(`Profile with email ${email} not found.`);
    }
}

/**
 * afficher uniquement les profils qui n'ont pas été bannis,
 * afficher uniquement le nom, l'age et la bio et le genre recherché
 */
function displayAllProfiles() {
    profiles
        .filter(profile => !profile.banned)
        .forEach(profile => {
            const { name, age, bio, genderTarget } = profile;
            console.log(`Name: ${name}, Age: ${age}, Bio: ${bio}, Gender Target: ${genderTarget}`);
        });
}
// afficher les profiles qui ont un score similaire à 1 points près 
// exemple si mon profile x a un score de 5, afficher les profiles qui ont un score entre 4 et 6
// également prendre en compte le genre recherché
// également prendre en compte les préférences (il faut minimum 1 préférence en commun)
function displayPossibleMatches(profileEmail, profileNumber=3) {
    const profile = profiles.find(profile => profile.email === profileEmail);
    if (!profile) {
        console.log(`Profile with email ${profileEmail} not found.`);
        return;
    }

    const potentialMatches = profiles.filter(matchProfile => {
        return (
            !matchProfile.banned &&
            matchProfile.email !== profileEmail &&
            Math.abs(matchProfile.score - profile.score) <= 1 &&
            matchProfile.gender === profile.genderTarget &&
            matchProfile.preferences.some(preference => profile.preferences.includes(preference))
        );
    });

    const limitedMatches = potentialMatches.slice(0, profileNumber);
    console.log("Possible Matches:");
    limitedMatches.forEach(match => {
        const { name, age, bio, genderTarget } = match;
        console.log(`Name: ${name}, Age: ${age}, Bio: ${bio}, Gender Target: ${genderTarget}`);
    });
}

// Matcher 2 profiles
function matchProfiles(email, targetEmail) {
}

// Refuser un profile, le score du profile est diminué de 1
function refuseProfile(profile) {

}

function displayMyMatches(email) {

}

// Bannir un profile
function banProfile(email) {

}
