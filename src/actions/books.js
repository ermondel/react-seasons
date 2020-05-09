import { BOOK_SELECTED } from '../types';

export const selectBook = (book) => ({
  type: BOOK_SELECTED,
  payload: book,
});
