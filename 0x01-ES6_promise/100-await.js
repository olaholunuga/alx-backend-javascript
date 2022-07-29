import { createUser, uploadPhoto } from './utils';

async function asyncUploadUser() {
  let res = {};
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    res = { photo, user };
  } catch (err) {
    res = { photo: null, user: null };
  }
  return res;
}

export default asyncUploadUser;
