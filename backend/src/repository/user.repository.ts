import User from "../models/user.model";

async function getUserByEmail(userEmail) {
    const user = await User.findOne({ email: userEmail })
    return user;
}

async function editUserPassword(userEmail, newPassword) {
    const user = await User.findOne({ email: userEmail });

    user.password = newPassword;

    await user.save();
}

async function createUser(newUser) {
    await User.create({
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password,
    });
}

export { getUserByEmail, createUser,  editUserPassword }