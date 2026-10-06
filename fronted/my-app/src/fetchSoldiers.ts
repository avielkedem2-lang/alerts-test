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



export async function register(body: object) {
    const url = "http://localhost:3000/api/auth/register"
    return await sendRequestPost(url, body)
}






export async function login(body: object) {
    const url = "http://localhost:3000/api/auth/login"
    return await sendRequestPost(url, body)
}







async function sendRequestGet(url: string, token:string) {
    try {
        const {data} = await axios.get(url, {headers: {token}})
        return data
    } catch (err) {
        if (axios.isAxiosError(err)){
            const message = err.response?.data
            console.log(message);
            return message
        }
    }
};



export async function getToken(token:string) {
    const url = "http://localhost:3000/api/auth/token";
    return await sendRequestGet(url, token)
};





