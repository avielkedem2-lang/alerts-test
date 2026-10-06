import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import { getToken } from "../../fetchSoldiers";


type Children ={
    children: React.ReactNode
}

export default function ProtectedRoute({children}: Children) {
    const token = localStorage.getItem("token");
    const navigate = useNavigate()
    if (!token) return (<Navigate to={"/login"}/>);
    useEffect(() => {
        getToken(token).then((data) => {
            if (data.message){
                return navigate("/login")
            }
        })
    },[token])
    return (
        <div>
            {children}
        </div>
    )
}
