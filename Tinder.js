// app tinder features

// ajouter au moins 10 profils
const profiles = [];
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

function createProfile(number=10) {
    letter1 = ["b", "f", "g", "j", "k", "l", "m", "m", "p", "s", "t"]
    letter2 = ["a", "e", "i", "o", "u", "y"]
    for (let step = 0; step < number; step++) {
        profile = {
            name: "",
            matches: [],
            banned: false,
            age: String((Math.random() * 90) + 10),
            bio: "Unknown",
            preferences: "Unknown",
            score: 0
        };
        profile.name += letter1[Math.floor(Math.random() * letter1.length)].toUpperCase();
        profile.name += letter2[Math.floor(Math.random() * letter2.length)];
        profile.name += letter1[Math.floor(Math.random() * letter1.length)];
        profile.name += letter2[Math.floor(Math.random() * letter2.length)];
        profile.name += " "
        profile.name += letter1[Math.floor(Math.random() * letter1.length)].toUpperCase();
        profile.name += letter2[Math.floor(Math.random() * letter2.length)];
        profile.name += letter1[Math.floor(Math.random() * letter1.length)];
        profile.name += letter2[Math.floor(Math.random() * letter2.length)];

        profile.email = profile.name.split(" ")[0].toLowerCase() + "@gmail.com";
        
        if (Math.random() * 2 === 0) {profile.gender = "Female"}
        else {profile.gender = "Male"}

        if (Math.random() * 2 === 0) {profile.genderTarget = "Female"}
        else {profile.genderTarget = "Male"}

        addProfile(profile)
    }
}

//un profile avec un email banni ne peut pas être ajouté
function addProfile(profile) {
    if (profile.banned === false) {
        profiles.push(profile)
    }
    else {
        console.log(profile.email + " acount is not allowed.")
    }
}

function removeProfile(email) {
    profiles.forEach(function(element) {
        if(element.email === email) {delete element}
    })
}

/**
 * afficher uniquement les profils qui n'ont pas été bannis,
 * afficher uniquement le nom, l'age et la bio et le genre recherché
 */
function displayAllProfiles() {
    profiles.forEach(function(profile) {
        if(profile.banned === false) {
            console.log(profile.name + profile.age + profile.bio + profile.genderTarget);
        }
    })
}
// afficher les profiles qui ont un score similaire à 1 points près 
// exemple si mon profile x a un score de 5, afficher les profiles qui ont un score entre 4 et 6
// également prendre en compte le genre recherché
// également prendre en compte les préférences (il faut minimum 1 préférence en commun)
function displayPossibleMatches(profileEmail, profileNumber=3) {

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
