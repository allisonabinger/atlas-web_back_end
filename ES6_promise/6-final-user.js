import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
  return results.map((result, i) => ({
    status: result.status,
    value: result.value || result.reason,
  }));
}
