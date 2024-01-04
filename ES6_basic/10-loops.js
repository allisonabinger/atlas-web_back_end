export default function appendToEachArrayValue(array, appendString) {
  const newarr = [];
  for (const value of array) {
    newarr.push(appendString + value);
  }
  return newarr;
}
