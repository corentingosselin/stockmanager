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
    const profile = profiles.find(profile => profile.email === email);
    const targetProfile = profiles.find(profile => profile.email === targetEmail);

    if (profile && targetProfile) {
        profile.matches.push(targetEmail);
        targetProfile.matches.push(email);
        console.log(`Profiles matched: ${email} and ${targetEmail}.`);
    } else {
        console.log("One or both profiles not found.");
    }
}

// Refuser un profile, le score du profile est diminué de 1
function refuseProfile(profile) {
    const profileToRefuse = profiles.find(profile => profile.email === profileEmail);
    if (profileToRefuse) {
        profileToRefuse.score -= 1;
        console.log(`Profile with email ${profileEmail} refused.`);
    } else {
        console.log(`Profile with email ${profileEmail} not found.`);
    }

}

function displayMyMatches(email) {
    const profile = profiles.find(profile => profile.email === email);
    if (profile) {
        console.log(`Matches for ${email}: ${profile.matches.join(", ")}`);
    } else {
        console.log(`Profile with email ${email} not found.`);
    }

}

// Bannir un profile
function banProfile(email) {
    const profile = profiles.find(profile => profile.email === email);
    if (profile) {
        profile.banned = true;
        bannedEmails.push(email);
        console.log(`Profile with email ${email} banned.`);
    } else {
        console.log(`Profile with email ${email} not found.`);
    }

}

// 10 profils créés via chatGPT
addProfile({
    name: "Alice Johnson",
    email: "alice@gmail.com",
    gender: "Female",
    genderTarget: "Female",
    matches: [],
    banned: false,
    age: 22,
    bio: "I love painting",
    preferences: ["art", "coffee", "travel"],
    score: 4
});

addProfile({
    name: "Bob Smith",
    email: "bob@gmail.com",
    gender: "Male",
    genderTarget: "Male",
    matches: [],
    banned: false,
    age: 28,
    bio: "Tech enthusiast",
    preferences: ["coding", "books", "music"],
    score: 5
});

addProfile({
    name: "Eva Rodriguez",
    email: "eva@gmail.com",
    gender: "Female",
    genderTarget: "Male",
    matches: [],
    banned: false,
    age: 25,
    bio: "Fitness freak",
    preferences: ["gym", "healthy food", "hiking"],
    score: 3
});

addProfile({
    name: "David Lee",
    email: "david@gmail.com",
    gender: "Male",
    genderTarget: "Female",
    matches: [],
    banned: false,
    age: 24,
    bio: "Travel addict",
    preferences: ["adventure", "photography", "movies"],
    score: 4
});

addProfile({
    name: "Sophie Brown",
    email: "sophie@gmail.com",
    gender: "Female",
    genderTarget: "Male",
    matches: [],
    banned: false,
    age: 26,
    bio: "Foodie and movie buff",
    preferences: ["food", "movies", "travel"],
    score: 5
});

addProfile({
    name: "Michael Wang",
    email: "michael@gmail.com",
    gender: "Male",
    genderTarget: "Female",
    matches: [],
    banned: false,
    age: 30,
    bio: "Nature lover",
    preferences: ["hiking", "camping", "gardening"],
    score: 3
});

addProfile({
    name: "Olivia Taylor",
    email: "olivia@gmail.com",
    gender: "Female",
    genderTarget: "Male",
    matches: [],
    banned: false,
    age: 23,
    bio: "Bookworm and coffee addict",
    preferences: ["books", "coffee", "music"],
    score: 4
});

addProfile({
    name: "Daniel Kim",
    email: "daniel@gmail.com",
    gender: "Male",
    genderTarget: "Female",
    matches: [],
    banned: false,
    age: 27,
    bio: "Sports enthusiast",
    preferences: ["basketball", "soccer", "fitness"],
    score: 5
});

addProfile({
    name: "Emma White",
    email: "emma@gmail.com",
    gender: "Female",
    genderTarget: "Male",
    matches: [],
    banned: false,
    age: 29,
    bio: "Music lover",
    preferences: ["music", "travel", "movies"],
    score: 3
});

addProfile({
    name: "Ryan Miller",
    email: "ryan@gmail.com",
    gender: "Male",
    genderTarget: "Female",
    matches: [],
    banned: false,
    age: 25,
    bio: "Tech geek",
    preferences: ["coding", "gaming", "movies"],
    score: 4
});
