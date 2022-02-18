import { users } from "../models/users";
export const checkUser = (login, password) => {
    for (let user of users) {
        if (user.login == login && user.password == password) {
            return true;
        }
    }
    return false;
}