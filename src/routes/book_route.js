import { Home, addBook, getAllBooks } from '../handler/book_handler.js';

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
  }
];

export default routes;
