let mealsPattern = [
  {
    name: 'Petit déjeuner',
    portions: 3
  },
  {
    name: 'Déjeuner',
    portions: 5
  },
  {
    name: 'Goûter',
    portions: 2
  },
  {
    name: 'Dîner',
    portions: 5
  }
]

let recommendations = [
  {
    name: 'Fruits et légumes',
    min: 5,
    period: 'day',
    cumulative: true
  },
  {
    name: 'Viande rouge',
    max: 2,
    period: 'week',
    cumulative: false
  },
  {
    name: 'Charcuterie',
    max: 1,
    period: 'week',
    cumulative: false
  },
  {
    name: 'Viande blanche',
    max: 1,
    period: 'day',
    cumulative: false
  },
  {
    name: 'Féculents et produits céréaliers',
    max: 2,
    period: 'day',
    cumulative: true
  },
  {
    name: 'Poisson gras',
    max: 1,
    period: 'week',
    cumulative: false
  },
  {
    name: 'Poisson maigre',
    max: 1,
    period: 'week',
    cumulative: false
  },
  {
    name: 'œuf',
    max: 1,
    period: 'day',
    cumulative: false
  },
  {
    name: 'Produits laitiers',
    max: 3,
    period: 'day',
    cumulative: true
  },
  {
    name: 'Légumineuses',
    min: 2,
    period: 'week',
    cumulative: true
  }
]

let weekUptake = {
  monday: {
    0: [
      {name: 'Produits laitiers',  portion: 1},
      {name: 'Féculents et produits céréaliers',  portion: 1}
    ],
    4: [
      {name: 'Produits laitiers',  portion: 1},
      {name: 'Féculents et produits céréaliers',  portion: 3}
    ]
  },
  saturday: {
    2: [
      {name: 'Viande rouge',  portion: 1}
    ]
  }
}
