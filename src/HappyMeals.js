class HappyMeals {

  /* Constructor : Déclaration et création de quelques variables utiles */

  constructor(reco, pattern, uptake = []) {
    this.days = 7
    this.nameDays = ['monday','tuesday','wednesday', 'thursday', 'friday', 'saturday', 'sunday' ]
    this.reco = reco
    this.pattern = pattern
    this.uptake = uptake
    this.totalsWeek = this.totalsWeek()
    this.weekMap = this.weekMap()
  }

  /* provideMeals : Methode principale retournant toutes les proposition de menus de la semaine */

  get provideMeals() {
    // on commence par boucler sur chaque jour de weekMap
    for(let nameDay in this.weekMap){
      // puis on boucle sur chaque menu
      for (var i = 0; i < this.weekMap[nameDay].pattern.length; i++) {
        // on verifie que le menu n'existe pas déjà
        if(this.weekMap[nameDay].proposals[i] === undefined){
          // Si le menu n'existe pas alors on le crée
          this.createMeal(nameDay, this.weekMap[nameDay].pattern[i], i)
        }
      }
    }
    return {
      weekMap: this.weekMap,
      totalsWeek: this.totalsWeek
    }
  }

  /* createMeal : créer un menu en vérifiant les reco */

  createMeal(nameDay, mealPattern, mealIndex){
    // on va chercher un aliment au hasard jusqu'à ce que le nombre de portion par menu soit atteint
    let portions = mealPattern.portions
    let i = 0;
    let newMeal = []
    //console.log('newMeal', newMeal)
    while (i < portions) {
      let newAliment = this.randomEntry(this.reco)
      // on vérifie qu'on a pas déjà ajouté l'aliment, autrement on cumule la quantité
      let sameAlimKey = newMeal.findIndex(alim => alim.id == newAliment.id)
      if(sameAlimKey >= 0){
        newMeal[sameAlimKey].portions = newMeal[sameAlimKey].portions + 1
      }else{
        newMeal.push({
          id: newAliment.id,
          name: newAliment.name,
          portions: 1
        })
      }
      i++
    }
    //  Pour finir on ajoute le menu crée au jour de la semaine
    this.weekMap[nameDay].proposals[mealIndex] = newMeal
  }

  /* randomEntry : methode utilitaire sortant une entrée au hasard depuis un tableau ou un object */

  randomEntry(objectOrArray) {
    if(objectOrArray.constructor.name === 'Array'){
      let randomKey = Math.floor(Math.random() * (objectOrArray.length - 1))
      return objectOrArray[randomKey]
    }else if (objectOrArray.constructor.name === 'Object') {
      let properties = Object.keys(objectOrArray)
      let randomKey = Math.floor(Math.random() * (properties.length - 1))
      let randomProperty = properties[randomKey]
      return objectOrArray[randomProperty]
    }
  }

  /* IncrementsTotals : Incrémente le total des aliments par jour et par semaine au fur et à mesure de l'ajout / création de menu */

  incrementTotals(weekMap,nameDay,mealKey){
    let newTotal = weekMap[nameDay].totals
    let meal = this.uptake[nameDay][mealKey]
    for (let i = 0; i < meal.length; i++) {
      let id = meal[i].id
      let allReadyRegistered = newTotal.find(alim => alim.id == meal[i].id)
      if(allReadyRegistered !== undefined){
        let allReadyRegisteredIndex = newTotal.findIndex(alim => alim.id == meal[i].id)
        newTotal.splice(allReadyRegisteredIndex,1)
        newTotal.push({
          id: allReadyRegistered.id,
          name: allReadyRegistered.name,
          portions: allReadyRegistered.portions + meal[i].portions
        })
      }else{
        newTotal.push(meal[i])
      }
    }
    return newTotal
  }

  /* totalsWeek : On crée un objet basé sur la liste des ingrédients, pret à enregistrer les totaux de la semaine */

  totalsWeek(){
    let totalsWeek = []
    this.reco.map(function(key, index){
      totalsWeek.push({
        id: key.id,
        name: key.name,
        portions: 0
      })
    })
    return totalsWeek
  }

  weekMap() {
    let weekMap = {}
    for (let i = 0; i < 7; i++) {
      let nameDay = this.nameDays[i]
      weekMap[nameDay] = {
        totals: [],
        proposals: {},
        pattern: this.pattern
      }
      if(this.uptake[nameDay] !== undefined){
        for (let mealKey in this.uptake[nameDay]) {
          weekMap[nameDay].proposals[mealKey] = this.uptake[nameDay][mealKey]
          weekMap[nameDay].totals = this.incrementTotals(weekMap,nameDay,mealKey)
        }
      }
    }
    return weekMap
  }

  debug() {
    console.log('reco', this.reco)
    console.log('pattern', this.pattern)
    console.log('uptake', this.uptake)
    console.log('provideMeals', this.provideMeals)
  }


}