const exprieTime = 1000 *60;

module.exports = function(req,res,next){
    res.header('Access-Control-Expose-Headers','access-token');
    const now = Date.now();

    let unauthorized = true;
    const token = req.headers['asscess-token'];
    if(token){
        const exprie = now - token > exprieTime;
        if(!exprie) {
            unauthorized = false;
            res.headers('access-token', now);
        }
    }

    if(unauthorized){
        res.sendStatus(401);
    }else{
        next();
    }
}