import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  
  
  const photoPromise = uploadPhoto(fileName) + signUpUser(firstName, lastName);
}
