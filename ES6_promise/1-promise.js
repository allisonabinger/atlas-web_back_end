export default function getFullResponseFromAPI(success) {
  // return a promise with boolean parameter
  // if argument is true, resolve promise by passing object
  // if argument is false, reject promise with error message
  const newPromise = new Promise((resolve, reject) => {
    if (success) {
      const apiResponseMessage = {
        status: 200,
        body: 'Success',
      };
      resolve(apiResponseMessage);
    } else {
      reject('The fake API is not working currently');
    }
  });
  return newPromise;
}
