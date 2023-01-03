const domElements = {
    results: document.getElementById('results'),
    input: document.getElementById('search-input'),
    button: document.getElementById('search-button')
}

function creatingCards(cardsData) {
    const cards = [];
    for (let i = 0;i < cardsData.length;i++) {
        cards.push(`
    <div class="card">
        <img src="${cardsData[i].src}" class="img__card" alt="cs go">
        <div class="card__content">
            <div id="title" class="card__title">${cardsData[i].title}</div>
            <div id="desc" class="card__desc">${cardsData[i].desc}</div>
            <div class="card__params">
                <label>Вид деятельности:</label>
                <div id="pastime">${cardsData[i].params.pastime}</div>
            </div>
            <div class="card__params">
                <label>Классификация:</label>
                <div id="category" >${cardsData[i].params.category}</div>
            </div>
            <div class="card__params">
                <label>Личный рейтинг:</label>
                <div id="personalRating" >${cardsData[i].params.personalRating}</div>
            </div>
            <div class="card__footer">
                <div class="card__params">
                    <label>Страна выпуска продукта:</label>
                    <div id="country" >${cardsData[i].params.country}</div>
                </div>
                <div class="card__params">
                    <label>Цена:</label>
                    <div id="cost" >${cardsData[i].params.cost}</div>
                </div>
            </div>
            <div class="star">
                <img src="./img/star-ico.svg" alt="">
            </div>
        </div>
    </div>`)
    }   return cards
}
const cardssArr = creatingCards(cardsData)

domElements.results.innerHTML = cardssArr.join('')


function filter() {
    const rgxp = RegExp(searchValue, 'i')
    let filteredCardsData = cardsData.filter(card => {
        if (rgxp.test(card.title)) {
            return true;
        } else {
            return false;
        }
    })
    const newFilterData = creatingCards(filteredCardsData)
    domElements.results.innerHTML = newFilterData.join('')
}
let searchValue = ''

domElements.input.oninput = (event) => {
    searchValue = event.target.value
    filter()
}

domElements.button.addEventListener("click", function() {
    filter()
})
