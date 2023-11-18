import { nanoid } from 'nanoid';
import books from '../data-source/book.js';

export const Home = (req, h) => {
  return h.response({
    message: 'Bookshelf API Version 1.0.0',
    status: 'success',
  });
};

export const addBook = (req, h) => {
  const { name, year, author, 
    summary, publisher, pageCount, 
    readPage, reading, } = req.payload;

  const createDate = new Date().toISOString();

  const newBook = {
    id: nanoid(16),
    name: name,
    author: author,
    summary: summary,
    year: year,
    publisher: publisher,
    pageCount: pageCount,
    readPage: readPage,
    reading: reading,
    finished: pageCount === readPage ? true : false,
    insertedAt: createDate,
    updatedAt: createDate,
  };

  if (name === '' || name === undefined) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    }).code(400);
  }

  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount' 
    }).code(400);
  }

  books.push(newBook)

  return h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: newBook.id
    }
  }).code(201);

};

export const getAllBooks = (req, h) => {
  return h.response({
    status: 'success',
    data: {
      books: books,
    },
  }).code(200);
}

export const getBookById = (req, h) => {
  const { bookId } = req.params;

 const book = books.filter((item) => item.id == bookId)[0];

 if (book != undefined) {
    return h.response({
      status: 'success',
      data: {
          book: book,
      },
    }).code(200);
 }
};
