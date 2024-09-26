const event=require('events')
const eventE= new event.EventEmitter()

const listen1 =()=>{
    console.log('listening 1');
    
}
const listen2 =()=>{
    console.log('listening 2');
    
}

eventE.addListener('con',listen1)
eventE.addListener('con',listen2)

var events=require('events').EventEmitter.listenerCount(eventE,'con')

console.log(events +" listening now");

eventE.emit('con')

eventE.removeListener('con',listen1)

eventE.emit('con')
