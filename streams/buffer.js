//Buffer => Representation of data that the node represents in memory.
const buf = Buffer.from("Hello")

console.log(buf.toJSON())
// represents in decimal => { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }


//console.log(buf)
// represents in Hexadecimal  => <Buffer 48 65 6c 6c 6f>