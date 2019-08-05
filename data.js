const url ="https://randomuser.me/api/?results=50"

fetch(url).then(function(response){
    return response.json()
})

.then(function(myJson){
    const json = myJson.results;
    console.log(json);
    
});
