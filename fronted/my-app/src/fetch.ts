import axios from "axios";




async function sendRequestPost(url: string, body: object) {
    try {
        const {data} = await axios.post(url, body)
        return data
    } catch (err) {
        if (axios.isAxiosError(err)){
            const message = err.response?.data
            console.log(message);
            return message
        }
    }
};




export async function createAlert(body: object) {
    const url = "http://localhost:3000/api/alerts";
    const res = await sendRequestPost(url, body)
    return res
}





async function sendRequestDelete(url: string) {
    try {
        const {data} = await axios.delete(url)
        return data
    } catch (err) {
        if (axios.isAxiosError(err)){
            const message = err.response?.data
            console.log(message);
            return message
        }
    }
};





export async function deleteAlertById(id: string) {
    const url = `http://localhost:3000/api/alerts/${id}`;
    const res = await sendRequestDelete(url)
    return res
}






async function sendRequestPatch(url: string, body: object) {
    try {
        const {data} = await axios.patch(url, body)
        return data
    } catch (err) {
        if (axios.isAxiosError(err)){
            const message = err.response?.data
            console.log(message);
            return message
        }
    }
};



export async function updateAlertById(id: string, body: object) {
    const url = `http://localhost:3000/api/alerts/${id}`;
    const res = await sendRequestPatch(url, body)
    return res
}







async function sendRequestGet(url: string) {
    try {
        const {data} = await axios.get(url)
        return data
    } catch (err) {
        if (axios.isAxiosError(err)){
            const message = err.response?.data
            console.log(message);
            return message
        }
    }
};




export async function getAlertById(id: string) {
    const url = `http://localhost:3000/api/alerts/${id}`;
    const res = await sendRequestGet(url)
    return res
}