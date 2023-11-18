import { Home, addBook } from '../handler/book_handler.js';

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
];

export default routes;
