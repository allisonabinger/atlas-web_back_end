/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  // Prompt:
  // when promise resolves, return response object
  // when promise rejects, return an empty Error object
  // log response to console for every resolution
  const logAndReturn = (handler) => (...args) => {
    // high-order, takes handler function and returns new function
    // logs messages then does handler function
    // i may not use this again because it was so tricky
    console.log('Got a response from the API');
    return handler(...args);
  };
  promise.then(
    logAndReturn((value) => ({ status: 200, body: 'success' })),
    logAndReturn((reason) => new Error()),
  );
}
