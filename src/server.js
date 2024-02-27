//SERVER
import http from "node:http";
import { json } from "./middlewares/json.js";
import { routes } from "./middlewares/routes.js";
import { extractQueryParams } from "./utils/extract-query-path.js";


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

// Query Parameters: URL Stateful => Filtros, paginação, não-obrigatórios
// Route Parameters: Identificação de recurso
// Request Body: Envio de informações de um formulário (HTTPs)

//http://localhost:3333/users?userId=1&name=Diego

// GET http://localhost:3333/users/1
// DELETE http: //localhost:3333/users/1

// POST http://localhost:3333/users

// Edição e remoção


const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })
  //console.log(route)

  if (route) {
    const routeParams = req.url.match(route.path)
    //console.log(routeParams.groups)
   //console.log(extractQueryParams(routeParams.groups.query))

   const { query, ...params } = routeParams.groups

   req.params = params
   req.query = query ? extractQueryParams(query) : {}

    //console.log(params)

    return route.handler(req, res)
  }

  return res.writeHead(404).end("Not Found!!!");
});

//http://localhost:3333/
server.listen(3333);
console.log('Http server running!!!! "API-👌" ');
