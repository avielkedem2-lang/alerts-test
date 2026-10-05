import { useState } from "react";
import { deleteAlertById, updateAlertById } from "../../fetch";
import "./createCard.css"
import { Link } from "react-router";

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
            <Link to={`/update/${alert._id}`}><button>update alert</button></Link>
            <button onClick={deleteAlert}>delete alert</button>
            {error && (
                <p>{error}</p>
            )}
            
        </div>
    )
}
