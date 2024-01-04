export default function appendToEachArrayValue(array, appendString) {
  const newarr = []
  for (let value of array) {
    newarr.push(appendString + value)
  };
  return newarr;
}
