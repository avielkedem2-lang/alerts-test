import { useEffect, useState } from "react";
import axios from "axios";




export function useFetch(url: string){
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get(url);
            setData(data.data)
        }
        getData()
    },[url])

    return {data}
}