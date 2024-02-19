import { buildRoutePath } from '../utils/build-route-path.js';
import { Database } from './database.js';
import { randomUUID } from 'node:crypto';

//import Database
const database = new Database();

//routes my application
export const routes = [
  {
    method: "GET",   //list
    path: buildRoutePath('/users'), //url
    handler: (req, res) => {
      const users = database.select("users");

      return res.end(JSON.stringify(users));
    },
  },

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

  {
    method: 'DELETE',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {
      return res.end()
    },
  }
];
