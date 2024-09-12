const buffer1=Buffer.from('abc')
const buffer2=Buffer.alloc(100)
const buffer3=Buffer.from([1,2,3,4])

console.log(buffer1.toString())

console.log(buffer2.length)

const bufferS=Buffer.from('MCA')
const bufferD=Buffer.alloc(3)
const bufferF=Buffer.concat([bufferS,buffer1])
bufferS.copy(bufferD)
console.log(bufferD.toString());

console.log(bufferF.toString())
