
//'/users/:id',


//create Regex to identify the ID 
export function buildRoutePath(path) {

  const routeParametersRegex = /:([a-zA-Z]+)/g

  console.log(Array.from(path.matchAll(routeParametersRegex)))
}