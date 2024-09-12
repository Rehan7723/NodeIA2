const events=require('events')
const eventEmitter=new events.EventEmitter()

var listen1=()=>{
    console.log('listening 1');
    
}

var listen2=()=>{
    console.log('listening 2');
    
}

eventEmitter.addListener('connection',listen1)
eventEmitter.addListener('connection',listen2)

var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection')

console.log(eventListeners+" listeners listening to events");

eventEmitter.emit('connection')

eventEmitter.removeListener('connection',listen1)
console.log('listen1 will not listen now');

eventEmitter.emit('connection')

eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection')

console.log(eventListeners+" listeners listening to events");