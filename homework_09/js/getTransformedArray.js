const getTransformedArray = (array, callback) =>{
    let result = [];
    forEach(array, function(val){
        result.push(callback(val));
    })
    return result;
};