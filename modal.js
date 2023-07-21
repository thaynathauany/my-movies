const background = document.getElementById('modal-background')
const modalContainer = document.getElementById('modal-container')

function backgroundClickHandler() {
    overlay.classList.remove('open')
}


function createModal(data) {
    modalContainer.innerHTML = `
        <h2 id = "movie-title">
            ${data.Title} - ${data.Year}
        </h2 >
        <section id="modal-body">
            <img id="movie-poster"
                src= ${data.Poster}
                alt="movie poster" />
            <div id="movie-info">
                <h3 id="movie-plot">
                    ${data.Plot}
                </h3>
                <div id="movie-cast">
                    <h4>Cast</h4>
                    <h5>${data.Actors}</h5>
                </div>
                <div id="movie-genre">
                    <h4>Genre:</h4>
                    <h5>${data.Genre}</h5>
                </div>
            </div>
        </section>
        <section id="modal-footer">
            <button id="add-to-list" onclick='{addToList(${JSON.stringify(
        data
    ).replace("'", '`')})}'>
                Add to List
            </button>
        </section>`

    // var element = document.getElementById("qq");
    // element.classList.add("escondido");
}

background.addEventListener('click', backgroundClickHandler)
