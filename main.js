const url = "https://cc-zico.github.io/json/data.json"
const cards = document.querySelector('.cards')


fetch(url)
.then(response => {
    if (response.ok) return response.json()
})
.then(data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
        <h2 class="card-title">Image ${i + 1} </h2>
        <img src="${data[i].url}" alt="" class="card-img">
        `
        cards.append(div)
    }
})  