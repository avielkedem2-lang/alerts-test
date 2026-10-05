import alertDal from "../DAL/alert.dal.js"
import { createError } from "../utils/createError.js"



export async function createAlert(body) {
    const res = await alertDal.insertAlert(body);
    return res
}




export async function getAll() {
    const res = await alertDal.findAllAlerts()
    return res
}



export async function getById(id) {
    const res = await alertDal.findAlertById(id);
    if (!res) throw createError(404, "not fond alert");
    return res
}



export async function deleteAlertFromDb(id) {
    const res = await alertDal.findAlertById(id);
    if (!res) throw createError(404, "not fond alert");
    await alertDal.deleteAlert(id);
    return "The alert is delete"
}


export async function updateAlert(id, body) {
    const res = await alertDal.findAlertById(id);
    if (!res) throw createError(404, "not fond alert");
    await alertDal.updateAlert(id, body);
    return "The alert is update"
}