export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  const newstring = Array.from(set)
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length));
  return newstring.join('-');
}
