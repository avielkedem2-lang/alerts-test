import axios from "axios";




async function sendRequestPost(url: string, body: object, token: string) {
    try {
        const { data } = await axios.post(url, body, { headers: { token } })
        return data
    } catch (err) {
        if (axios.isAxiosError(err)) {
            const message = err.response?.data
            console.log(message);
            return message
        }
    }
};




export async function createAlert(body: object, token: string) {
    const url = "http://localhost:3000/api/alerts";
    const res = await sendRequestPost(url, body, token)
    return res
}





async function sendRequestDelete(url: string, token: string) {
    try {
        const { data } = await axios.delete(url, { headers: { token } })
        return data
    } catch (err) {
        if (axios.isAxiosError(err)) {
            const message = err.response?.data
            console.log(message);
            return message
        }
    }
};





export async function deleteAlertById(id: string, token: string) {
    const url = `http://localhost:3000/api/alerts/${id}`;
    const res = await sendRequestDelete(url, token)
    return res
}






async function sendRequestPatch(url: string, body: object, token: string) {
    try {
        const { data } = await axios.patch(url, body, { headers: { token } })
        return data
    } catch (err) {
        if (axios.isAxiosError(err)) {
            const message = err.response?.data
            console.log(message);
            return message
        }
    }
};



export async function updateAlertById(id: string, body: object, token: string) {
    const url = `http://localhost:3000/api/alerts/${id}`;
    const res = await sendRequestPatch(url, body, token)
    return res
}







async function sendRequestGet(url: string, token: string) {
    try {
        const { data } = await axios.get(url, { headers: { token } })
        return data
    } catch (err) {
        if (axios.isAxiosError(err)) {
            const message = err.response?.data
            console.log(message);
            return message
        }
    }
};




export async function getAlertById(id: string, token: string) {
    const url = `http://localhost:3000/api/alerts/${id}`;
    const res = await sendRequestGet(url, token)
    return res
}