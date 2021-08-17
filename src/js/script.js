/* eslint-disable no-unused-vars */
{
  'use strict';

  const select = {
    templateOf: {
      books: '#template-book',
    },
    list: {
      booksList: '.books-list',
    },
    all: {
      books: '.book',
      bookImages: '.book__image',
    },
    form: {
      filters: '.filters',
    },
    container: '.container',
  };

  const classNames = {
    book: {
      hiddenBook: 'hidden',
      favorite: 'favorite',
    },
  };

  const templates = {
    book: Handlebars.compile(document.querySelector(select.templateOf.books).innerHTML),
  };

  class BooksList{
    constructor(){
      const thisBooksList = this;
      thisBooksList.initData();
      thisBooksList.getElements();
      thisBooksList.render();
      thisBooksList.initActions();
    }

    initData(){
      const thisBooksList = this;
      thisBooksList.data = dataSource;
      thisBooksList.data.books = dataSource.books;
    }
    getElements(){
      const thisBooksList = this;
      thisBooksList.booksList = document.querySelector(select.list.booksList);
      thisBooksList.booksTemplate = document.querySelector(select.templateOf.books);
      thisBooksList.favoriteBooks = [];
      thisBooksList.bookImages = document.querySelectorAll(select.all.bookImages);
      thisBooksList.filters = [];
      thisBooksList.filterForm = document.querySelector(select.form.filters);
    }
    render(){
      const thisBooksList = this;
      for (let book of thisBooksList.data.books){
        const bookHTML = templates.book({
          id: book.id,
          name: book.name,
          price: book.price,
          image: book.image,
          rating: book.rating,
        });
        const bookDOM = utils.createDOMFromHTML(bookHTML);
        thisBooksList.booksList.appendChild(bookDOM);
      }
    }
    initActions(){
      // nie radzę sobie z ćwiczeniem 3 i 4
      const thisBooksList = this;
      for (let image of thisBooksList.bookImages){
        image.addEventListener('dblclick', function(event){
          event.preventDefault();
          const bookID = image.getAttribute('data-id');
          if(!thisBooksList.favoriteBooks.includes(bookID)){
            image.classList.add(classNames.book.favorite);
            thisBooksList.favoriteBooks.push(bookID);
          }
          else{
            image.classList.remove(classNames.book.favorite);
            thisBooksList.favoriteBooks = thisBooksList.favoriteBooks.filter(id => id !== bookID);


          }

        });

      }

    }
  }

  const app = new BooksList();
}
