import { useEffect } from "react";
import axios from "axios";
import { alertStore } from "../store/alertStore";




export function useFetch(url: string, token: string){
    // const [data, setData] = useState([])
    const setAlerts = alertStore(s => s.setAlerts)
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get(url);
            setAlerts(data.data)
        }
        getData()
    },[url])

    // return {data}
}