/*


Partie 1: POLYMORPHISME

Objectif :

    Illustrer le polymorphisme en créant différentes classes d'unités et de bâtiments dans un jeu de stratégie, chacune avec ses propres actions.

    Instructions :

    Classe de Base GameEntity (Entité de Jeu) :

        Propriétés : name (string).
        Méthode : performAction(), qui affiche un message générique.
        Créer des Sous-Classes de GameEntity :

        Soldier (Soldat) : Implémentez performAction() pour attaquer.
        Villager (Villageois) : Implémentez performAction() pour récolter des ressources.
        Building (Bâtiment) : Ajoutez une propriété type (par exemple, "Caserne"). Implémentez performAction() pour créer des unités ou améliorer des technologies.

    Méthodes Polymorphiques :

        Chaque sous-classe doit avoir sa propre implémentation de performAction().

    Tests et Validation :

        Créez des instances de chaque sous-classe et appelez leur méthode performAction() pour démontrer des comportements spécifiques.



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
