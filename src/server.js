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


const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Dane',
      email: 'johndane@gmail.com',
    })
    return res.writeHead(201).end()
  }

  return res.writeHead(404).end('Not Found!!!')

});

server.listen(3333);
//http://localhost:3333/