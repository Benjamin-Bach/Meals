// init
let testSemaine = new HappyMeals(recommendations, mealsPattern, weekUptake)
testSemaine.provideMeals()

// Propositions sur toute la semaine
console.log(testSemaine.weekMap)

// Totaux, jour par jour et sur toute la semaine
console.log(testSemaine.totalsWeek)

// Cartographie des non cumulables (proteines animales)
console.log(testSemaine.cumulativeState)

// Retrouver les arguments passés dans HappyMeals()
console.log(testSemaine.reco)
console.log(testSemaine.pattern)
console.log(testSemaine.uptake)

// les jours de la semaine
console.log(testSemaine.nameDays)

// Methode de débug complète :
testSemaine.debug()

// Methode randomEntry : extrait une entrée au hasard d'un tableau ou d'un objet
testSemaine.randomEntry(testSemaine.nameDays)