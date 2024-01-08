export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let result = [];
  for (let item of set) {
    if(item.startsWith(startString)) {
      result.push(item.slice(startString.length));
    }
  }
  return result.join('-');
}
