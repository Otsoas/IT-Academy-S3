//
const EventEmitter = require('events');

class Topics extends EventEmitter {
  constructor(topicName) {
    super();
    this._topicName = topicName;
    this.observers = [];
    this.texts = [];
  }

  //methodes

  subscribed(observer) {
    this.observers.push(observer)
  };

  unsubscribed(observer) {
    this.observers = this.observers.filter(nameObserver => nameObserver != observer)
  };

  beginListener() {
    this.on('sendMessage', (obj) => {
      console.log(`A new message was send by ${obj.userName}: ${obj.text}`)
      this.notifys(obj);
    });
  };

  notifys(msg) {
    this.observers.forEach(nameObserver => {
      if (nameObserver.userName === msg.name) {
        console.log(`Hi ${msg.userName}, you massage: "${msg.text}", in ${this._topicName}`)
      } else {
        console.log(`Hello, ${nameObserver.userName}, your friend ${msg.name} send massage: "${msg.text}", in ${this._topicName}`)
      };
    });
  };
};

////////////////////////////////////this.observers.forEach(nameObserver => {
// notifys(msg) {
//   this.observers.forEach(nameObserver => {
//     if (nameObserver.userName === msg.name) {
//       console.log(`Hi ${msg.userName}, you massage: "${msg.text}", in ${this._topicName}`)
//     } else {
//       console.log('hi');
//     }
//   })
// }

// notifys(msg) {
//   this.observers.forEach(nameObserver => {
//     if (nameObserver.userName != msg.name) {
//       console.log(`Hello, ${nameObserver.userName}, your friend ${msg.name} send massage: "${msg.text}", in ${this._topicName}`);
//     } else {

//     };

//   });
// }
// }
module.exports = Topics;