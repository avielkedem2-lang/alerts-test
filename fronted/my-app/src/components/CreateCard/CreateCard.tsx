import { useState } from "react";
import { deleteAlertById } from "../../fetch";
import "./createCard.css"

type Alert = {
    _id: string,
    displayName: string,
    description: string,
    priority: string,
    arena: string,
    status: string,
    lat: number,
    lon: number
};



export default function CreateCard(alert: Alert) {
    const [error, setError] = useState("")
    const deleteAlert = () => {
        console.log("ffffffffffffff");
        
        deleteAlertById(alert._id).then((data) => {
            if (data.data) {
                console.log(data.data);
            } else {
                setError(data.message)
            }
        })
    }
    return (
        <div className="card">
            <h3>id: {alert._id}</h3>
            <p>displayName: {alert.displayName}</p>
            <p>description: {alert.description}</p>
            <section className="section-card">
                <p>priority: {alert.priority}</p>
                <p>arena: {alert.arena}</p>
                <p>status: {alert.status}</p>
                <p>lat: {alert.lat}</p>
                <p>lon: {alert.lon}</p>
            </section>
            <button>update alert</button>
            <button onClick={deleteAlert}>delete alert</button>
            {error && (
                <p>{error}</p>
            )}
            
        </div>
    )
}
