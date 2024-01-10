export default function getResponseFromAPI() {
  // returns a promise, function return value tested with instanceof Promise
  const myPromise = new Promise((resolve, reject) => {
    const test = true;
    if (test) {
      resolve('Success');
    } else {
      reject(new Error('Failure'));
    }
  });
  return myPromise;
}
