const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('api.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

server.use(jsonServer.rewriter({
    '/animalia': '/animals?_expand=employee&_sort=employee.id&_embed=treatments&_expand=location',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(middlewares)
server.use(router)

server.listen(port, () => {
    console.log('JSON Server is running')
})
