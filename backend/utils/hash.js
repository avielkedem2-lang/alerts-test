import bcrypt from "bcrypt";




export async function createHash(password) {
    return bcrypt.hash(password, 10)
}



export async function comperePassword(password, passwordHash) {
    return bcrypt.compare(password, passwordHash)
};

