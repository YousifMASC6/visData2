const url ="https://randomuser.me/api/?results=50"

fetch(url).then(function(response){
    return response.json()
})

.then(function(myJson){
    const json = myJson.results;
    // console.log(json[0]);
    const main = document.querySelector("main")
    console.log(main)

const createCard = (obj, indx) => {
    const newCard = document.createElement("div")
    newCard.className = "card"
    newCard.id = indx;

    const face = document.createElement("img")
    face.src = obj.picture.medium
    face.alt = "Portrait"

    const newText = document.createElement("p")
    newText.innerText = `${obj.name.first} ${obj.name.last}
    ${obj.gender}`

    newCard.appendChild(face)
    newCard.appendChild(newText)
    main.appendChild(newCard)
}



const loopCreate = arr => {
    for(let i = 0; i < arr.length; i++){
        createCard(arr[i], i)
}
}
loopCreate(json)


});

