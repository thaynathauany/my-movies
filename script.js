const searchButton = document.getElementById('search-button');
const overlay = document.getElementById('modal-overlay')
const movieName = document.getElementById('movie-name');
const movieYear = document.getElementById('movie-year');
const movieListContainer = document.getElementById('movie-list')

let movieList = [];

async function searchButtonClickHandler() {
    try {
        let url = `http://www.omdbapi.com/?apikey=${key}&t=${movieNameParameterGenerator()}${movieYearParameterGenerator()}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log('data: ', data);
        if (data.Error) {
            throw new Error('Movie not found')
        }
        createModal(data);
        overlay.classList.add('open');
        var elements = document.getElementsByClassName("qq");
        // Loop através de cada elemento e adicione a classe desejada
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add("escondido");
        }

    } catch (error) {
        notie.alert({ type: 'error', text: error.message });
    }
}

function movieNameParameterGenerator() {
    if (movieName.value === '') {
        throw new Error('The name of the movie must be informed')
    }
    return movieName.value.split(' ').join('+')
}

function movieYearParameterGenerator() {
    if (movieYear.value === '') {
        // throw new Error('The year of the movie must be informed')
        return '';
    }

    if (movieYear.value.length !== 4 || Number.isNaN(Number(movieYear.value))) {
        throw new Error('Invalid year name')
    }
    //return movieYear.value
    return `&y=${movieYear.value}`
}

function addToList(data) {
    movieList.push(data);
    updateUI(data)
    overlay.classList.remove('open')
    var elements = document.getElementsByClassName("qq");
    // Loop através de cada elemento e adicione a classe desejada
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("escondido");
    }
}

function updateUI(data) {
    movieListContainer.innerHTML += `<article class='qq'
    >
    <img id="img-list"
        src="${data.Poster}"
        alt="${data.Title}" 
    />
    <button class="remove-button"><i class="bi bi-trash3"></i>Remove</button>
</article>`
}

console.log(movieList);

searchButton.addEventListener('click', searchButtonClickHandler)
