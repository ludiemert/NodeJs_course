import http from 'node:http'
import { Transform } from 'node:stream'

// 3 types streams =>  streams transformation
class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    console.log(transformed)

    callback(null, Buffer.from(String(transformed)))
  }
}

const server = http.createServer((req, res) => {
  req.on('data', (chunk) => chunk).pipe(new InverseNumber()).pipe(res)
})

server.listen(3334);
//http://localhost:3334/