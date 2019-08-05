const main = document.querySelector("main")

const createCard = (obj, indx) => {
    const newCard = document.createElement("div")
    newCard.className = "card"
    newCard.id = indx;


const newText = document.createElement("p")
    newText.innerText = `${obj.name.first} ${obj.name.last}`
    
    newCard.appendChild(newText)}

    const loopCreate = arr => {
        for(let i = 0; i < arr.length; i++){
            createCard(arr[i], i)
    }
    loopCreate(json)
    }
    
      