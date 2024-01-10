/*

temps : 40mn,

    Reprenez le code du jeu précédent et ajoutez les fonctionnalités suivantes :

     - Le building peut vraiment produire des unités. (On ajoute l'unité au tableau entities)
     - une entité peut mourrir si ses points de vie tombent à 0. (On supprime l'entité du tableau entities)
     - si il n'y a plus de villageois, le jeu est terminé et le building est détruit: 
     (implémenter une méthode spéciale pour la mort du building qui affiche un message:
         "le building est détruit, la partie est terminée")

 */

class GameEntity {
  health = 100;
  died = false;

  constructor(name, strength = 10) {
    this.name = name;
    this.strength = strength;
  }

  damage(damager) {
    console.log(`${this.name} attaque ${damager.name}.`);
    this.health -= damager.strength;
    if (this.health <= 0) {
      this.died = true;
    }
  }

  hasDied() {
    return this.died;
  }
}

class Soldier extends GameEntity {
  constructor(name) {
    super(name, 40);
  }

  damage(damager) {
    super.damage(damager);
  }
}

class Villager extends GameEntity {
  constructor(name) {
    super(name, 20);
  }

  damage(damager) {
    super.damage(damager);
  }

  farm() {
    console.log(`${this.name} récolte des ressources.`);
  }
}

class Building extends GameEntity {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  damage(damager) {
    if (damager instanceof Soldier) {
      console.log(`${this.name} attaque ${damager.name}.`);
      this.health -= damager.strength / 2;
      if (this.health <= 0) {
        this.died = true;
      }
    }
  }

  die() {
    console.log(`${this.name} est détruit, la partie est terminée.`);
  }

  produceNewSoldier(soldierName) {
    console.log(`${this.name} produit un nouveau soldat.`);
    return new Soldier(soldierName);
  }
}

const entities = [];

//créer un building
//const building ...
const building = new Building("Bâtiment 1", "Caserne");
entities.push(building);

//créer 3 villageois
const villager1 = new Villager("Villageois 1");
const villager2 = new Villager("Villageois 2");
const villager3 = new Villager("Villageois 3");

//push
entities.push(villager1);
entities.push(villager2);
entities.push(villager3);

//créer un soldat
const soldier = new Soldier("Soldier");

// le building produit 3 soldats
const soldier1 = building.produceNewSoldier("Soldier 1");
const soldier2 = building.produceNewSoldier("Soldier 2");
const soldier3 = building.produceNewSoldier("Soldier 3");

//push
entities.push(soldier1);
entities.push(soldier2);
entities.push(soldier3);

// le soldat attaque un villageois au hasard
const villagers = entities.filter((entity) => entity instanceof Villager);
const randomVillager = villagers[Math.floor(Math.random() * villagers.length)];
console.log(soldier.name + " essaye de tuer " + randomVillager.name);
randomVillager.damage(soldier);
// le même soldat finit de tuer le villageois
randomVillager.damage(soldier);
randomVillager.damage(soldier);
randomVillager.damage(soldier);
randomVillager.damage(soldier);

// display villager life
console.log(
  randomVillager.name + " a " + randomVillager.health + " points de vie."
);

if (randomVillager.hasDied()) {
  entities.splice(entities.indexOf(randomVillager), 1);
}

if (villagers.length === 0) {
  building.die();
  entities.splice(entities.indexOf(building), 1);
}

//display all entities
console.log(entities);
