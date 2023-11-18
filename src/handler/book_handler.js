export const Home = (req, h) => {
  return h.response({
    message: 'Bookshelf API Version 1.0.0',
    status: 'success',
  });
};
