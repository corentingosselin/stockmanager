class UniteJeu {
  constructor(nom, sante) {
      this.nom = nom;
      this.sante = sante;
  }

  attaquer(cible) {
      console.log(`${this.nom} lance une attaque contre ${cible.nom}.`);
  }
}

class Soldat extends UniteJeu {
  attaquer() {
      console.log(`${this.nom} attaque avec son arme.`);
  }

  infligerDegats(cible) {
      console.log(`${this.nom} inflige des dégâts à ${cible.nom}.`);
      cible.subirDegats(10);
  }
}

class Villageois extends UniteJeu {
  recolter() {
      console.log(`${this.nom} récolte des ressources.`);
  }

  subirDegats(cible) {
      console.log(`${this.nom} subit des dégâts de ${cible.nom}.`);
      this.subirDegats(20);
  }
}

class Batiment extends UniteJeu {
  constructor(nom, sante, type) {
      super(nom, sante);
      this.type = type;
  }

  produireUnite() {
      console.log(`${this.nom} produit une nouvelle unité.`);
  }

  subirDegats(cible) {
      if (cible instanceof Soldat) {
          console.log(`${this.nom} est attaqué par ${cible.nom}.`);
          this.subirDegats(30);
      } else {
          console.log(`${this.nom} ne peut être attaqué que par des soldats.`);
      }
  }
}



class UniteAvecSante extends UniteJeu {
  constructor(nom, sante) {
      super(nom, sante);
  }

  takeDamage(degats) {
      this.sante -= degats;
      console.log(`${this.nom} subit ${degats} points de dégâts. Santé restante : ${this.sante}`);
  }

  performAction(target) {
      console.log(`${this.nom} effectue une action sur ${target.nom}.`);
  }
}

class Soldat extends UniteAvecSante {
  constructor(nom, sante, degats) {
      super(nom, sante);
      this.degats = degats;
  }

  performAction(target) {
      console.log(`${this.nom} attaque ${target.nom}.`);
      target.takeDamage(this.degats);
  }
}

class Villageois extends UniteAvecSante {
  performAction(target) {
      console.log(`${this.nom} répare ${target.nom}.`);
      target.takeDamage(-10); 
  }
}

class Batiment extends UniteAvecSante {
  performAction(target) {
      console.log(`${this.nom} est attaqué par ${target.nom}.`);
      target.takeDamage(20);
  }
}

const soldat1 = new Soldat("Soldat 1", 100, 15);
const villageois1 = new Villageois("Villageois 1", 80);
const batiment1 = new Batiment("Caserne 1", 200, "Caserne");

soldat1.performAction(villageois1);
villageois1.performAction(batiment1);
batiment1.performAction(soldat1); 