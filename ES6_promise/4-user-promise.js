// unsure if this one was designed to import from utils, not used here

export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({ firstName, lastName });
  });
}
