import { Readable, Writable, Transform } from "node:stream";


// 3 types streams =>  streams reading => req => ReadableStream
class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));

        this.push(buf);
      }
    }, 1000);
  }
}

// 3 types streams =>  streams transformation
class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1
    callback(null, Buffer.from(String(transformed)))
  }
}

// 3 types streams =>  streams writing = process data => res => WritableStream
class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) *10)
    callback()
  }
}



new OneToHundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStream());

