class PlayerName {
  constructor(username) {
    this.username = username
  }
}


class Scoreboard {
  static instance = null
  constructor() {
    if (Scoreboard.instance) throw new Error(`This class can't be instantiated more than once`)
    this.players = []
    Scoreboard.instance = this
  }

  static getInstance() {
    if (!Scoreboard.instance) return new Scoreboard()
    return Scoreboard.instance
  }

  addPlayers(...players) {
    players.forEach(player => {
      const {
        username
      } = player
      const isRepeated = this.players.some(p => p.username === username)
      if (isRepeated) return
      this.players = [...this.players, {
        username: username,
        score: 0
      }]
    })
  }

  addLife(player, points) {
    const {
      username
    } = player
    const isPlayerAdded = this.players.some(p => p.username === username)
    if (!isPlayerAdded) return
    this.players = this.players.map(p => p.username !== username ? p : {
      username,
      score: p.score + points
    })
  }

  takeLife(player, points) {
    const {
      username
    } = player
    const isPlayerAdded = this.players.some(p => p.username === username)
    if (!isPlayerAdded) return
    this.players = this.players.map(p => p.username !== username ? p : {
      username,
      score: p.score - points
    })
  }

  combatResults() {
    const players = this.players.sort((oneplayer, secondplayer) => secondplayer.score - oneplayer.score)

    console.log('///THE COMBAT///')
    players
      .forEach(player => console.log(`player: ${player.username}, score: ${player.score}`))

    console.log(`!!!!!!!!!The winner is: ${players[0].username}!!!!!!!!!`)
  }
}

const mario = new PlayerName('mario')
const yoda = new PlayerName('yoda')
const zelda = new PlayerName('zelda')
const cid = new PlayerName('cid')
const lobato = new PlayerName('lobato')

const score = new Scoreboard()

score.addPlayers(mario, yoda, zelda, cid, lobato)

score.addLife(yoda, 25)
score.addLife(mario, 25)
score.addLife(zelda, 25)
score.addLife(cid, 25)
score.addLife(lobato, 25)
score.takeLife(yoda, 7)
score.takeLife(lobato, 11)
score.takeLife(zelda, 14)
score.takeLife(cid, 9)
score.takeLife(mario, 11)
score.addLife(yoda, 10)


score.combatResults()