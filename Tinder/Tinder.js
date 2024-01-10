
class Profile {
    constructor(name, email, gender, genderTarget, age, bio, preferences, tinderApp) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.genderTarget = genderTarget;
        this.matches = [];
        this.banned = false;
        this.age = age;
        this.bio = bio;
        this.preferences = preferences || [];
        this.score = 0;
        this.tinderApp = tinderApp || null;
    }

    setTinderApp(tinderApp) {
        this.tinderApp = tinderApp;
    }

    refuse() {
        this.score -= 1;
    }

    displayMyMatches() {
        this.matches.forEach(matchEmail => {
            const matchProfile = this.tinderApp.getProfileByEmail(matchEmail);
            if (matchProfile) {
                console.log(`Name: ${matchProfile.name}, Age: ${matchProfile.age}, Bio: ${matchProfile.bio}, Gender Target: ${matchProfile.genderTarget}`);
            }
        });
    }

    ban() {
        this.banned = true;
    }

    displayPossibleMatches() {
        if (this.tinderApp) {
            const possibleMatches = this.tinderApp.getPotentialMatches(this);
            possibleMatches.forEach(match => {
                console.log(`Name: ${match.name}, Age: ${match.age}, Bio: ${match.bio}, Gender Target: ${match.genderTarget}`);
            });
        } else {
            console.error("Tinder app not set for this profile.");
        }
    }
}

class Tinder {
    constructor() {
        this.profiles = [];
    }

    getProfileByEmail(email) {
        return this.profiles.find(profile => profile.email === email);
    }

    addProfile(profile) {
        if (!profile.banned) {
            this.profiles.push(profile);
        }
    }

    removeProfile(email) {
        const index = this.profiles.findIndex(profile => profile.email === email);
        if (index !== -1) {
            this.profiles.splice(index, 1);
        }
    }

    displayAllProfiles() {
        const filteredProfiles = this.profiles.filter(profile => !profile.banned);
        filteredProfiles.forEach(profile => {
            console.log(`Name: ${profile.name}, Age: ${profile.age}, Bio: ${profile.bio}, Gender Target: ${profile.genderTarget}`);
        });
    }

    banProfile(email) {
        const profile = this.profiles.find(p => p.email === email);
        if (profile) {
            profile.ban();
        }
    }

    getPotentialMatches(profile) {
        return this.profiles.filter(p =>
            !p.banned &&
            p.email !== profile.email &&
            Math.abs(p.score - profile.score) <= 1 &&
            p.gender === profile.genderTarget &&
            p.preferences.some(preference => profile.preferences.includes(preference))
        );
    }
}
