# Happy Meals

## Usage
Pour les phases de dév, utiliser les src (le build ne sort rien en console)
```js
// init
let testSemaine = new HappyMeals(recommendations, mealsPattern, weekUptake)
testSemaine.provideMeals()

// Propositions sur toute la semaine
testSemaine.weekMap

// Totaux, jour par jour et sur toute la semaine
testSemaine.totalsWeek

// Cartographie des non cumulables (proteines animales)
testSemaine.cumulativeState

// Retrouver les arguments passés dans HappyMeals()
testSemaine.reco
testSemaine.pattern
testSemaine.uptake

// les jours de la semaine
testSemaine.nameDays

// Methode de débug complète :
testSemaine.debug()

// Methode randomEntry : extrait une entrée au hasard d'un tableau ou d'un objet
testSemaine.randomEntry()
```
## Data structure

### Input
Des données d'input sont déjà créées à titre d'exemple dans src/data.js

#### weekUptake
Les repas déjà consommés dans la semaine.
Un objet contenant une propriété par jour.
Chaque jour est un objet contenant une entrée par repas.
Chaque repas est un tableau contenant les aliments utilisés.
Chaque aliment est un objet regroupant id, nom et nombre de portions.
#### mealsPattern
Modèle contenant le nom de chaque repas et le nombre de portions attendus pour chacun d'entre eux.
Tableau d'objets.
#### reccomendations
Liste des catégories d'ingrédient.
Tableau d'objet. Chaque objet étant un ingrédient avec les propriétes suivantes :
id,
name,
min ou max, (indique les limites de consommation hautes ou basses de l'ingrédient)
period, ('day' ou 'week', contextualise le min ou le max sur une période donnée)
cumulative (permet de savoir si cette ingrédient peut être cumulé chaque jour avec d'autres qui auraient aussi la propriété réglée sur false)