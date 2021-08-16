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

  const templates = {
    book: Handlebars.compile(document.querySelector(select.templateOf.books).innerHTML),
  };

  class BooksList{
    constructor(){
      const thisBooksList = this;
      thisBooksList.initData();
      thisBooksList.getElements();
      thisBooksList.render();
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
    }
    render(){
      const thisBooksList = this;
      for (let book in thisBooksList.data.books){
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
  }

  const app = new BooksList();
}
