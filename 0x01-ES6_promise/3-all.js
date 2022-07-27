import { uploadPhoto, createUser } from "./utils"
function handleProfileSignup() {
    photo = uploadPhoto.resolve()
    user = createUser.resolve()

    console.log(`${photo.body} ${user.firstName} ${user.lastName}`)
}