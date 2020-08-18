export const includes = (str, search) =>
  str && search && str.toLowerCase().indexOf(search.toLowerCase()) >= 0;
