import { createError } from "../utils/createError.js"
import soldiersDal from "../DAL/soldiers.dal.js"
import { comperePassword } from "../utils/hash.js"
import { decodeToken, createToken } from "../utils/token.js"



export async function createSoldier(body, token) {
    const id = decodeToken(token).id
    const soldier = await soldiersDal.findSoldierById(id);
    if (!soldier) throw createError(404, "Not fond soldier");
    const isSoldier = await soldiersDal.findSoldierByEmail(body.email);
    if (isSoldier) throw createError(409, "The soldier already exists");
    if (soldier.role !== "admin") throw createError(400, "The soldier is not allowed to create a new soldier")
    const data = await soldiersDal.inertSoldier(body);
    return data
}



export async function loginSoldier(body) {
    const soldier = await soldiersDal.findSoldierByEmail(body.email);
    if (!soldier) throw createError(404, "Not fond soldier");
    const isPassword = await comperePassword(body.password, soldier.password);
    if (!isPassword) throw createError(401, "The password is not correct");
    const token = createToken(soldier._id)
    return { token }
};



export async function getSoldier(token) {
    const id = decodeToken(token).id
    const soldier = await soldiersDal.findSoldierById(id);
    if (!soldier) throw createError(404, "Not fond soldier");
    delete soldier.password
    return soldier
}


export async function deleteSoldier(token) {
    const id = decodeToken(token).id
    const soldier = await soldiersDal.findSoldierById(id);
    if (!soldier) throw createError(404, "Not fond soldier");
    if (soldier.role !== "admin") throw createError(400, "The soldier is not allowed to delete a new soldier");
    await soldiersDal.deleteSoldier(id)
    return { data: "soldier delete successfully" }
}