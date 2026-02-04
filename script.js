function addItem(){
    let name = document.querySelector("#name").value;
    let text = document.querySelector("#text").value;
    
    let card = document.querySelector(".item").cloneNode(true);
    card.hidden = false;
    card.children[0].innerText = name;
    card.children[1].innerText = text;
    document.querySelector("#container").appendChild(card);
}

