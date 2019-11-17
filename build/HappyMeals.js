class HappyMeals {

  constructor(reco, pattern, uptake = []) {
    this.days = 7
    this.nameDays = ['monday','tuesday','wednesday', 'thursday', 'friday', 'saturday', 'sunday' ]
    this.reco = reco
    this.pattern = pattern
    this.uptake = uptake
    this.totalsWeek = []
    this.weekMap = this.weekMap()
  }

  get provideMeals() {
    return 'Yo'
  }

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
          portion: allReadyRegistered.portion + meal[i].portion
        })
      }else{
        
        newTotal.push(meal[i])
      }
    }
    return newTotal
  }

  addMealToweekMap(weekMap, nameDay){
    weekMap[nameDay].uptake = this.uptake[nameDay]
    for (let mealKey in this.uptake[nameDay]) {
      weekMap[nameDay].proposals[mealKey] = this.uptake[nameDay][mealKey]
      weekMap[nameDay].totals = this.incrementTotals(weekMap,nameDay,mealKey)
    }
    return weekMap[nameDay]
  }

  weekMap() {
    let weekMap = {}
    let totalsWeek = []
    this.reco.map(function(key, index){
      totalsWeek.push({
        id: key.id,
        name: key.name,
        portion: 0
      })
    })
    this.totalsWeek = totalsWeek
    console.log(this.totalsWeek)
    for (let i = 0; i < 7; i++) {
      let nameDay = this.nameDays[i]
      weekMap[nameDay] = {
        totals: [],
        proposals: {},
        pattern: this.pattern
      }
      if(this.uptake[nameDay] !== undefined){
        weekMap[nameDay] = this.addMealToweekMap(weekMap,nameDay)
      }
    }
    return weekMap
  }

  debug() {
    console.log('reco', this.reco)
    console.log('pattern', this.pattern)
    console.log('uptake', this.uptake)
    console.log('weekMap', this.weekMap)
    console.log('totalsWeek', this.totalsWeek)
    console.log('provideMeals', this.provideMeals)
  }


}