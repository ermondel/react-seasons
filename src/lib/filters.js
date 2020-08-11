export const filterObjListByQuery = (list, query, props) => {
  if (list.length && query) {
    query = query.toLowerCase();
    props = props.split(', ');

    return list.filter((obj) => {
      let targetStr = '';

      for (let prop of props) {
        if (obj[prop]) targetStr += obj[prop] + ' ';
      }

      targetStr = targetStr.toLowerCase();

      return targetStr.indexOf(query) >= 0;
    });
  } else {
    return list;
  }
};
