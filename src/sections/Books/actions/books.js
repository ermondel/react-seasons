import {
  BOOKS_ITEM_SELECTED,
  BOOKS_VIEW_CHANGED,
  BOOKS_SEARCH_REQUEST,
} from '@redux/types';

export const selectBook = (book) => ({
  type: BOOKS_ITEM_SELECTED,
  payload: book,
});

export const changeBooksView = (view = 'list') => ({
  type: BOOKS_VIEW_CHANGED,
  view,
});

export const bookSearch = (query) => ({
  type: BOOKS_SEARCH_REQUEST,
  query,
});
