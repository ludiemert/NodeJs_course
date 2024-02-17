import http from "node:http";

// - Creating users
// - Listing users
// - Editing users
// - Removing users

// - HTTP
// - HTTP method
// - URL

// GET, POST, PUT, PATCH, DELETE
// GET => Fetch a resource from the back-end (Buscar um recurso)
// POST => Create a resource in the back-end
// PUT => Update a resource in the back-end 
// PATCH => Update specific information about a resource in the back-end
// DELETE => Delete a resource from the back-end

// GET /users => Fetching users from the back-end(Buscando)
// POST /users => Create a user in the back-end

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res.end('users')
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Dane',
      email: 'johndane@gmail.com',
    })
    return res.end('Criacao de usuarios')
  }

  return res.end('Hello World')

});

server.listen(3333);
//http://localhost:3333/