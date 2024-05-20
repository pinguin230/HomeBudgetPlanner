import bcrypt from 'bcrypt';
import BadRequestError from "../error/bed.reqest.error";
import { ErrorMessage } from "../error/errors.definiton";
import {  createUser, getUserByEmail } from "../repository/user.repository";

async function registerUser(userInfo) {
    const user = await getUserByEmail(userInfo.email);
    if (user) {
        throw new BadRequestError(ErrorMessage.userExists);
    }
    const saltRounds = parseInt(process.env.SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(userInfo.password, saltRounds);
    userInfo.password = hashedPassword;


    await createUser(userInfo);
    return "User created";

}
export { registerUser}