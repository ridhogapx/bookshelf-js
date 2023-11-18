import { Home } from '../handler/book_handler.js';

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: Home,
  },
];

export default routes;
