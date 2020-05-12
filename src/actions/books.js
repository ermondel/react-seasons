import { BOOK_SELECTED, BOOKS_VIEW_CHANGED } from '../types';

export const selectBook = (book) => ({
  type: BOOK_SELECTED,
  payload: book,
});

export const changeBooksView = (view = 'list') => ({
  type: BOOKS_VIEW_CHANGED,
  view,
});
