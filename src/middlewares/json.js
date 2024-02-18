export async function json(req, res) {
  const buffers = [];

  //JSON data on input
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;

    //console.log(body)
  }

  //JSON data on output
  res.setHeader("Content-type", "application/json")
}
