

export function createError(status, message){
    const err = Error(message);
    err.status = status
    return err
}