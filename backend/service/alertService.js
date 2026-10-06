import alertDal from "../DAL/alert.dal.js"
import { createError } from "../utils/createError.js"
import {decodeToken} from "../utils/token.js"
import soldiersDal from "../DAL/soldiers.dal.js";



export async function createAlert(body, token) {
    const id = decodeToken(token).id
    const soldier = await soldiersDal.findSoldierById(id);
    const alerts = await alertDal.insertAlert(body);
    const res = filterByRole(alerts, soldier)
    return res
}




export async function getAll(token) {
    const res = await alertDal.findAllAlerts()
    return res
}



export async function getById(id, token) {
    const res = await alertDal.findAlertById(id);
    if (!res) throw createError(404, "not fond alert");
    return res
}



export async function deleteAlertFromDb(id, token) {
    const res = await alertDal.findAlertById(id);
    if (!res) throw createError(404, "not fond alert");
    await alertDal.deleteAlert(id);
    return "The alert is delete"
}


export async function updateAlert(id, body, token) {
    const res = await alertDal.findAlertById(id);
    if (!res) throw createError(404, "not fond alert");
    await alertDal.updateAlert(id, body);
    return "The alert is update"
};






function filterByRole(alerts, soldier){
    if (soldier.role !== "admin" || soldier.role !== "general_user") return alerts;
    const alertsFilter = alerts.filter((a) => {return a.arena.toLowerCase() === soldier.assignedArena.toLowerCase()});
    return alertsFilter
}