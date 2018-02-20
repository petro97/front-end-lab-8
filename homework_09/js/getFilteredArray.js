const getFilteredArray = (array, callback) => {
    let result = [];
    forEach(array, function(val){
        if(callback(val)){
            result.push(val);
        }
    })
    return result;
};