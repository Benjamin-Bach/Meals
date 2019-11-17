class HappyMeals {

  constructor(reco, pattern, uptake = []) {
    this.days = 7
    this.nameDays = ['monday','tuesday','wednesday', 'thursday', 'friday', 'saturday', 'sunday' ]
    this.reco = reco
    this.pattern = pattern
    this.uptake = uptake
    this.weekMap = this.weekMap()
  }

  get provideMeals() {
    return 'Yo'
  }

  incrementTotals(weekMap,nameDay,mealKey){
    let newTotal = weekMap[nameDay]['totals']
    let meal = this.uptake[nameDay][mealKey]
    for (let i = 0; i < meal.length; i++) {
      if(!newTotal[meal[i]['name']]){
        newTotal[meal[i]['name']] = meal[i]['portion']
      }else{
        newTotal[meal[i]['name']] = meal[i]['portion'] + newTotal[meal[i]['name']]
      }
    }
    return newTotal
  }

  addMealToweekMap(weekMap, nameDay){
    weekMap[nameDay]['uptake'] = this.uptake[nameDay]
    for (let mealKey in this.uptake[nameDay]) {
      weekMap[nameDay]['proposals'][mealKey] = this.uptake[nameDay][mealKey]
      weekMap[nameDay]['totals'] = this.incrementTotals(weekMap,nameDay,mealKey)
    }
    return weekMap[nameDay]
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
    console.log('provideMeals', this.provideMeals)
    
  }


}