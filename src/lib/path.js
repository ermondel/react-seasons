export const includesPath = (val, target) => {
  if (!val) return false;
  if (val === '/') return true;

  const valArr = [];
  for (let item of val.split('/')) if (item.trim()) valArr.push(item);

  const targetArr = [];
  for (let item of target.split('/')) if (item.trim()) targetArr.push(item);

  for (let i = 0; i < valArr.length; i++) {
    if (valArr[i] !== targetArr[i]) return false;
  }

  return true;
};
