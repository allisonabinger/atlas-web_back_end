/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  promise
    .then(
      (value) => {
        console.log('Got a response from the API');
        return { status: 200, body: 'success' };
      },
      (reason) => {
        console.log('Got a response from the API');
        return new Error();
      },
    );
}
