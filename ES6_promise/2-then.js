/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  const response = {
    status: 200,
    body: 'success',
  };
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return response;
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    });
}
