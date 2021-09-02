
const bookSearch = () => {
    const searchField = document.getElementById('searchField')
    const searchText = searchField.value;
    searchField.value = '';
    const error = document.getElementById('error');
    error.textContent = '';
    if(searchText === ''){
      
      error.innerText = 'search field can not be empty'
    }
    
      const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch (url)
    .then(res => res.json())
    .then(data =>  displayResult(data.docs) );  
}

// result part
const displayResult = books => {
    const searchField = document.getElementById('searchResult');
    searchField.textContent = '';
const errorResult = document.getElementById('no-result');
errorResult.textContent = ''
    if(books.length === 0){  
      errorResult.innerText = 'No Result Found'
    }
      books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` <div class="card">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">${book.author_name}</p>
                <p class="card-text">${book.publisher}</p>
                <p class="card-text">${book.first_publish_year}</p>
        </div>
      </div>
        `
        searchField.appendChild(div);
    });    
};