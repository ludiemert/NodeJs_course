import { buildRoutePath } from '../utils/build-route-path.js';
import { Database } from './database.js';
import { randomUUID } from 'node:crypto';

//import Database
const database = new Database();

//routes my application
export const routes = [

 // GET => Fetch a resource from the back-end (Buscar um recurso = Fetch a resource)
  {
    method: "GET",   //list
    path: buildRoutePath('/users'), //url
    handler: (req, res) => {
     // console.log(req.query)
     const { search } = req.query

     const users = database.select('users', search ? {
      name: search,
      email: search
    } : null)

      return res.end(JSON.stringify(users));
    },
  },

  // POST => Create a resource in the back-end
  {
    method: "POST",
    path: buildRoutePath ('/users'), //url
    handler: (req, res) => {
      const { name, email } = req.body;

      const user = {
        id: randomUUID(),
        name,
        email,
      };

      database.insert("users", user);

      return res.writeHead(201).end();
    },
  },

  // PUT => Update a resource in the back-end
  {
    method: 'PUT',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {
    //  console.log(req.params)
    const { id } = req.params
    const { name, email } = req.body

    database.update('users', id, {
      name,
      email,
    })

    //204 => response  okay not content
      return res.writeHead(204).end()
    },
  },


  {
    method: 'DELETE',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {
    //  console.log(req.params)
    const { id } = req.params

    database.delete('users', id)

    //204 => response  okay not content
      return res.writeHead(204).end()
    },
  }
];
