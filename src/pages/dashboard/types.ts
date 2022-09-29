// Generate Order Data
interface Row {
  id: number,
  avatarUrl: string,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,
}

export const row: Row[] = [
  {
    id: 0,
    avatarUrl: 'https://material-kit-react.devias.io/static/images/avatars/avatar_1.png',
    date: '16 Mar, 2019',
    name: 'Elvis Presley',
    shipTo: 'Tupelo, MS',
    paymentMethod: 'VISA ⠀•••• 3719',
    amount: 312.44
  },
  {
    id: 1,
    avatarUrl: 'https://material-kit-react.devias.io/static/images/avatars/avatar_7.png',
    date: '16 Mar, 2019',
    name: 'Paul McCartney',
    shipTo: 'London, UK',
    paymentMethod: 'VISA ⠀•••• 2574',
    amount: 3866.99
  },
  {
    id: 2,
    avatarUrl: 'https://material-kit-react.devias.io/static/images/avatars/avatar_8.png',
    date: '16 Mar, 2019',
    name: 'Tom Scholz',
    shipTo: 'Boston, MA',
    paymentMethod: 'MC ⠀•••• 1253',
    amount: 100.81
  },
  {
    id: 3,
    avatarUrl: 'https://material-kit-react.devias.io/static/images/avatars/avatar_9.png',
    date: '16 Mar, 2019',
    name: 'Michael Jackson',
    shipTo: 'Gary, IN',
    paymentMethod: 'AMEX ⠀•••• 2000',
    amount: 654.39
  },
  {
    id: 4,
    avatarUrl: 'https://material-kit-react.devias.io/static/images/avatars/avatar_10.png',
    date: '15 Mar, 2019',
    name: 'Bruce Springsteen',
    shipTo: 'Long Branch, NJ',
    paymentMethod: 'VISA ⠀•••• 5919',
    amount: 212.79
  }
]