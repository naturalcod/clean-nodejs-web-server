

module.exports = (RootRoutes) => {

    

    return (req,res, next) => {

        // Получаем текущие настройки маршрута
        let BaseRoute = RootRoutes.filter(i => i.path == req.baseUrl)[0];
        

        if(BaseRoute.authorization && BaseRoute.authorization.mode == 'full'){
            
            if(BaseRoute.authorization.exceptions.includes(getPathFromUrl(req.originalUrl))){
                next();
            }else{
                console.log('Проверка авторизации')
                res.status(401);
                res.json({error: true, detail: 'NON_AUTH'})
            }

        }else{
            next();
        }
     
    }
    
}


function getPathFromUrl(url) {
    return url.split("?")[0];
  }