export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  return Array.from(set)
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');
}
