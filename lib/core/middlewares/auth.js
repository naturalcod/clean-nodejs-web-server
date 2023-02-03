




module.exports = () => {

    

    return (req,res, next) => {

        next();

        // TODO: JWT AUTH
     
    }
    
}


function getPathFromUrl(url) {
    return url.split("?")[0];
  }