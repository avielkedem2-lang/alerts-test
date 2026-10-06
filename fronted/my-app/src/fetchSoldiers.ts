import axios from "axios";



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
}
