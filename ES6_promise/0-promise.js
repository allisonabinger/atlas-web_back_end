export default function getResponseFromAPI(){
  const myPromise = new Promise((resolve, reject) => {
    const test = true;
    if (test) {
      resolve('Success');
    } else {
      reject(new Error('Failure'));
    }
  });
  return myPromise
}
