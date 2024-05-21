import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import BadRequestError from "../error/bed.reqest.error";
import {ErrorMessage} from "../error/errors.definiton";
import {createUser, getUserByEmail} from "../repository/user.repository";

async function registerUser(userInfo) {
    const user = await getUserByEmail(userInfo.email);
    if (user) {
        throw new BadRequestError(ErrorMessage.userExists);
    }
    const saltRounds = parseInt(process.env.SALT_ROUNDS);
    userInfo.password = await bcrypt.hash(userInfo.password, saltRounds);


    await createUser(userInfo);
    return "User created";

}
async function loginUser(userInfo) {
    const user = await getUserByEmail(userInfo.email);
    if (!user) {
        throw new BadRequestError(ErrorMessage.invalidEmail);
    }
    let originPassword=user.password;
    const passwordVerity= await bcrypt.compare(userInfo.password,originPassword);
    if(!passwordVerity) {  throw new BadRequestError(ErrorMessage.invalidPassword)}

    return jwt.sign({name: user.first_name, email: user.email}, process.env.TOKEN_KEY,{expiresIn: '2h'});}
export { registerUser,loginUser}