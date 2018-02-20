const collectIds = (array) => {
    let filterFilms = getFilteredArray(array, function(val){
        return val.rating > 3;
        }
    );
    return getTransformedArray(filterFilms, function(val){
        return val.id;
    }) 
};