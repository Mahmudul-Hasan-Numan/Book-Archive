document.getElementById('search-button').addEventListener('click', function () {
    const bookSearch = document.getElementById('search-field');
    const searchText = bookSearch.value;
    bookSearch.value = '';
    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(info => loadingBooks(info.docs))
})

const loadingBooks = books => {
    const booksContainer = document.getElementById('loading-books');
    booksContainer.textContent = '';
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <h3>Book Name: ${book.title}</h3>
            <h5>Author: ${book.author_name}</h5>
            <p>Publisher(s): ${book.publisher}</p>
            <p>First Publication Year: ${book.first_publish_year}</p>
        `;
        booksContainer.appendChild(div);
        console.log(book);
    })
}
