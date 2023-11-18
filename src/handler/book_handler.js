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
    insertedAt: new Date().toISOString(),
    updatedAt: this.insertedAt,
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
      message: 'Gagal menambahkan buku. readPage tidak boleh boleh lebih besar dari pageCount' 
    }).code(400);
  }

  books.push(newBook)

  return h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: newBook.id
    }
  }).code(201)

}
