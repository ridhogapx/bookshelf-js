import { Home, addBook, getAllBooks, 
        getBookById, updateBook, deleteBook }  from '../handler/book_handler.js';

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: Home,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBook, 
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBook
  }
];

export default routes;
