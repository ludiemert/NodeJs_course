import http from "node:http";

// - Creating users
// - Listing users
// - Editing users
// - Removing users

// - HTTP
// - HTTP method
// - URL

// GET, POST, PUT, PATCH, DELETE
// GET => Fetch a resource from the back-end (Buscar um recurso = Fetch a resource)
// POST => Create a resource in the back-end
// PUT => Update a resource in the back-end
// PATCH => Update specific information about a resource in the back-end
// DELETE => Delete a resource from the back-end

// GET /users => Fetching users from the back-end(Fetching=Buscando)
// POST /users => Create a user in the back-end

/*Stateful - Stateless 
o stateless é um widget estático, ou seja, não temos como gerenciar o 
estado dele. E o stateful é completamente dinâmico e nos dá o poder de 
torná-lo mutável através da gerência de estados*/

// headers (requests / response) => Metadata

/*HTTP status code
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

*/

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null
  }

  //console.log(body)

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;

    users.push({
      id: 1,
      name,
      email,
    });
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end("Not Found!!!");
});

//http://localhost:3333/
server.listen(3333);
console.log('Http server running!!!! "API-👌" ');
