

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

/*

    Partie 2

    Interaction et Combat dans un Jeu de Stratégie
    Objectif :
    Ajouter un système de santé et de dégâts pour permettre des interactions de combat entre différentes entités de jeu.

    Instructions :
        Amélioration de la Classe GameEntity :

    Ajoutez une propriété health (santé).
    Ajoutez une méthode takeDamage(damage) pour réduire la santé.
    Modifiez performAction() pour qu'elle prenne une autre entité comme cible.

    Sous-Classes avec Capacités d'Attaque et de Défense :

        Soldier : Ajoutez une propriété damage. La méthode performAction(target) inflige des dégâts à la cible.
        Villager : Ne peut pas attaquer, mais peut prendre des dégâts.
        Building : Ne peut pas se déplacer ou attaquer, mais a une grande quantité de santé.


    Implémenter des Interactions :

        Les soldats peuvent attaquer d'autres soldats, des villageois ou des bâtiments.
        Les villageois peuvent réparer des bâtiments ou être attaqués.
        Les bâtiments peuvent être attaqués et détruits.


    Tests et Validation :

        Créez des scénarios d'interaction, 
        comme un soldat attaquant un villageois, ou un villageois réparant un bâtiment.


*/
