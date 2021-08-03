const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 2900;
const auth = require('json-server-auth');

server.db = router.db;

server.use(middlewares);
const rules = auth.rewriter({
    taxes: 660,
    submissions: 660,
    form: 660,
});

server.use(rules)
server.use(auth);
server.use(router);
server.listen(port, () => {
    console.log('JSON Server is running')
});
