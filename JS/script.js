const filmsList = document.querySelector('.films__list');
const searchForm = document.querySelector('.search__form');
const elInput = document.querySelector('.search__input  ')

const API__KEY = '95cf90ac'

fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API__KEY}&s=films`)
    .then(response => response.json())
    .then(filmsApi =>

        

        filmsApi.Search.forEach(film => {
            let moreBtn = document.createElement('button')
            let newLi = document.createElement('li')
            let newHeading = document.createElement('h3')
            newHeading.textContent = film.Title
            newHeading.classList.add('newheading')
            let newYear = document.createElement('p')
            let apiImg = document.createElement('img')
            moreBtn.setAttribute('class', 'more__btn')
            apiImg.setAttribute('class', 'img__api')
            apiImg.setAttribute('src', 'bnnma')
            apiImg.setAttribute('width', '250')
            apiImg.setAttribute('height', '250')
            newLi.setAttribute('class', 'list__item')
            newYear.classList.add('yeartext')
            newYear.textContent = film.Year
            newHeading.textContent = film.Title
            apiImg.src = film.Poster
            moreBtn.textContent = 'More'

            newLi.appendChild(apiImg)
            newLi.appendChild(newHeading)
            newLi.appendChild(newYear)
            newLi.appendChild(moreBtn)
            filmsList.appendChild(newLi)
        })
    )

searchForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    if(elInput.value != '') {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API__KEY}&s=${elInput.value}`)
        .then(response => response.json())
        .then(filmsApi =>
                renderFilmApi(filmsApi, filmsList)
        )
    } else {
        return
    }
})

function renderFilmApi(array, elem) {
    elem.innerHTML = null
        array.Search.forEach(film => {
            let newLi = document.createElement('li')
            let newHeading = document.createElement('h3')
            let newYear = document. createElement('p')
            let apiImg = document.createElement('img')
            let moreBtn = document.createElement('button')
            newHeading.classList.add('newheading')
            moreBtn.textContent = 'More'
            newYear.classList.add('yeartext')
            moreBtn.classList.add('more__btn')
            apiImg.setAttribute('src', 'bnnma')
            apiImg.setAttribute('width', '250')
            apiImg.setAttribute('height', '250')
            newLi.setAttribute('class', 'list__item')
            newYear.textContent = film.Year
            newHeading.textContent = film.Title
            apiImg.src = film.Poster
            
            newLi.appendChild(apiImg)
            newLi.appendChild(newHeading)
            newLi.appendChild(newYear)
            newLi.appendChild(moreBtn)
            elem.appendChild(newLi)
        })
    console.log(array);
}
