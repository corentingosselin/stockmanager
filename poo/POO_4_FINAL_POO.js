

/*

temps : 30m,

Partie 1: POLYMORPHISME

Objectif :

    Illustrer le polymorphisme en créant différentes classes d'unités et de bâtiments dans un jeu de stratégie, chacune avec ses propres actions.

    Instructions :

    Classe de Base GameEntity (Entité de Jeu) :

        Propriétés : name (string).
                     health (number) : Santé de l'entité.
        Méthode : 
            - damage(target) : Affiche un message indiquant que l'entité attaque la cible.


    Créer des Sous-Classes de GameEntity :

        Soldier (Soldat) : Implémentez attack() pour attaquer. 

        Villager (Villageois) : Implémentez farm() pour récolter des ressources.

        Building (Bâtiment) : Ajoutez une propriété type (par exemple,type="Caserne"). 
        Implémentez produceUnit() pour produire une nouvelle unité, un building ne peut produire que des soldats.

        toutes les fonctions peuvent juste utiliser un console.log() pour afficher un message de l'action

    Méthodes Polymorphiques :

        Chaque sous-classe doit avoir sa propre implémentation de damage().
        Car une entité prendra des dégâts différemment, 
        par exemple le villageois perds 2 fois plus de points de vie que le soldat.
        le building ne peut être attaqué que par des soldats.

    Tests et Validation :

        Créez des instances de chaque sous-classe et appelez leurs méthodes pour démontrer des comportements spécifiques.



 */

