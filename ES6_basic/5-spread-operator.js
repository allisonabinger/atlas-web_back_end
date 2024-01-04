export default function concatArrays(array1, array2, string) {
  return [].concat(...array1, ...array2, ...string);
}
