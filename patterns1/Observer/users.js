//Class User
const EventEmitter = require('events');


class Users extends EventEmitter {
  constructor(userName) {
    super()
    this._userName = userName;
  }
  //Comprovar si hace falta
  getName() {
    return this._name
  }

  //methodes
  notify(topics, text) {
    let msg = {
      userName: this._userName,
      text: text
    }
    topics.emit('sendMessage', msg)
    topics.texts.push(msg)
  }

}


module.exports = Users;