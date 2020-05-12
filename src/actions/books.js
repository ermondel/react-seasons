import { SET_ACTIVE_BOOK, SET_BOOKS_VIEW } from '../types';

export const selectBook = (book) => ({
  type: SET_ACTIVE_BOOK,
  payload: book,
});

export const changeBooksView = (view = 'list') => ({
  type: SET_BOOKS_VIEW,
  view,
});
