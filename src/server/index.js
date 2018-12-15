const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname,'../../src/mock/db.json'));
const middlewares = jsonServer.defaults();


server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/contentTreeList':'/contentTreeList',
    '/blog/:resource/:id/show': '/:resource/:id'
  }));

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/login',function(req,res,next){
    res.header('Access-Control-Expose-Headers', 'access-token');
    const {username,password} = req.body;
    if(username==='admin'&&password==='123456'){
        res.header('access-token',Date.now());
        res.json(true);
    }else{
        res.json(false);
    }
});

server.use(require('./auth'));
server.use('/api', router);
// server.use(router);


server.listen(8213,function(){
    console.log('JSON Server is running in http://localhost:8213')
});