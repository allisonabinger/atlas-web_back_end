export default function createInt8TypedArray(length, position, value) {
  let buffer = new ArrayBuffer(length);
  let int8Array = new Int8Array(buffer);
  if (position >= && position < length) {
    int8Array[position] = value;
  } else {
    throw new Error('Position outside range');
  }
  return buffer
}
