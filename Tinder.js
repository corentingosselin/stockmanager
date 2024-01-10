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

//un profile avec un email banni ne peut pas être ajouté
function addProfile(profile) {
}

function removeProfile(email) {
}

/**
 * afficher uniquement les profils qui n'ont pas été bannis,
 * afficher uniquement le nom, l'age et la bio et le genre recherché
 */
function displayAllProfiles() {
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