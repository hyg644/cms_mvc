const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname,'../../src/mock/db.json'));
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

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
server.post('/slider',function(req,res,next){
    res.header('Access-Control-Expose-Headers', 'access-token');
    res.header('access-token',Date.now());
    let data=[]
    for(let i=0;i<30;i++){
        data.push({
            'no':`6 ${i}`,
            'name':`咕咕123 ${i}`,
            'href':'http://domestic.firefox.sina.com',
            'sort':`100${i}`,
            'status':1,
            'img':'https://s3.dualstack.us-east-2.amazonaws.com/fwb-test/Peter%20Pan.jpg',
    
        })
    }
    res.json(data)
})
server.use(require('./auth'));
server.use(router);

server.listen(8213,function(){
    console.log('JSON Server is running in http://localhost:8213')
});