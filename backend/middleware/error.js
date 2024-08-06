
export const error = (err, req, res, next )=>{
   
    let error = {...err};
    error.message = err.message;

    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(value => value.message);
        error.message = message;
    }

    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        error.message = message;
    }

    if(err.name === 'CastError'){
        const message = `Ressource not found. Invalid: ${err.path}`
        error.message = message;
    }

    res.json({
        message: error.message || "Some kinda error!! :("
    })
}