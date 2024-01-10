// app tinder features

// ajouter au moins 10 profils
const profiles = [];

function createProfile(number=10) {
    const letter1 = ["b", "f", "g", "j", "k", "l", "m", "m", "p", "s", "t"]
    const letter2 = ["a", "e", "i", "o", "u", "y"]
    const preferences = ["Food", "Sleep", "Sport", "Music", "Game"]
    for (let step = 0; step < number; step++) {
        const profile = {
            name: "",
            matches: [],
            banned: false,
            age: String((Math.floor(Math.random() * 90) + 10)),
            bio: "Unknown",
            preferences: [],
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

        let gend = Math.floor(Math.random() * 2);
        let target = Math.floor(Math.random() * 2);
        if (gend === 0) {profile.gender = "Female"}
        else {profile.gender = "Male"}

        if (target === 0) {profile.genderTarget = "Female"}
        else {profile.genderTarget = "Male"}

        for (let step2 = 0; step2 < (Math.floor(Math.random() * 3) + 1); step2++) {
            profile.preferences.push(preferences[Math.floor(Math.random() * 5)])
        }
        addProfile(profile)
    }
}

//un profile avec un email banni ne peut pas être ajouté
function addProfile(profile) {
    if (profile.banned === false) {
        profiles.push(profile)
    }
    else {
        console.log(profile.email + " account is not allowed.")
    }
}

function removeProfile(email) {
    for (let step = 0; step < profiles.length; step++) {
        if(profiles[step].email === email) {profiles.splice(step, 1)}
    }
}

function searchProfile(email) {
    let qualified = null;
    profiles.forEach(function(profile) {
        if(profile.email === email) {qualified = profile}
    })
    return qualified;
}

/**
 * afficher uniquement les profils qui n'ont pas été bannis,
 * afficher uniquement le nom, l'age et la bio et le genre recherché
 */
function displayAllProfiles() {
    profiles.forEach(function(profile) {
        if(profile.banned === false) {
            console.log(profile.name + " ; " + profile.age + " ; " + profile.bio + " ; " + profile.genderTarget);
        }
    })
}
// afficher les profiles qui ont un score similaire à 1 points près 
// exemple si mon profile x a un score de 5, afficher les profiles qui ont un score entre 4 et 6
// également prendre en compte le genre recherché
// également prendre en compte les préférences (il faut minimum 1 préférence en commun)
function displayPossibleMatches(profileEmail, profileNumber=3) {
    const me = searchProfile(profileEmail);
    let id = Math.floor(Math.random() * profiles.length);
    let perso_found = false;
    for (let step = 0; step < profileNumber; step++) {
        const you = profiles[id]
        if (Math.abs(me.score - you.score) <= 1 
        && me.genderTarget === you.gender) {
            let pref_found = false
            me.preferences.forEach(function(preference) {
                if (you.preferences.find((element) => element === preference)
                && pref_found === false) {
                    console.log(you.email);
                    pref_found = true;
                    perso_found = true;
                }})
        }
        id -= 1
        if (id < 0) {id = profiles.length - 1}
    }
    if (perso_found === false) {console.log("Possible partner not found.")}
}

// Matcher 2 profiles
function matchProfiles(email, targetEmail) {
    searchProfile(email).matches.push(targetEmail)
}
    

// Refuser un profile, le score du profile est diminué de 1
function refuseProfile(profile) {
    profile.score -= 1;
}

function displayMyMatches(email) {
    console.log(searchProfile(email).matches)
}

// Bannir un profile
function banProfile(email) {
    searchProfile(email).banned = true
}

createProfile();
displayAllProfiles();

const eliminated = profiles[Math.floor(Math.random() * profiles.length)].email 
console.log("\nRemove process with " + eliminated + " : \n");
removeProfile(eliminated);
displayAllProfiles();

const finding = profiles[Math.floor(Math.random() * profiles.length)].email 
console.log("\nMatch possibility process with " + finding + " : \n");
displayPossibleMatches(finding)

console.log("\nOther processes test : \n");
matchProfiles(profiles[0].email, profiles[1].email)
displayMyMatches(profiles[0].email)
refuseProfile(profiles[0])
console.log(profiles[0].score)
banProfile(profiles[0].email)
const copy_first = profiles[0]
addProfile(copy_first)