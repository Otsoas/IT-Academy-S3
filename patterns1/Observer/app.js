//
const Users = require('./users')
const Topics = require('./topics')


const nature = new Topics('nature')
const games = new Topics('games')


const Judit = new Users('Judit')
const Omega = new Users('Omega')
const Sergio = new Users('Sergio')


nature.subscribed('Judit')
games.subscribed('Omega')
games.subscribed('Sergio')

nature.beginListener()
games.beginListener()



Judit.notify(nature, 'Hello naturist!')
Omega.notify(games, 'The life is a game')
Sergio.notify(games, 'The life is a game')