const cypherPhrase = (obj, str) => {
    let array = str.split('');
    return getTransformedArray(array, function(val){
        for(let key in obj){
            if(val === key){
                return obj[key];
            }
        }
        return val;
    }).join('');
}