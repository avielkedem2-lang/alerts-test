import { alertStore } from "../../store/alertStore"
import CreateCard from "../CreateCard/CreateCard"
import "./allCards.css"

export default function AllCards() {
    const alerts = alertStore(s => s.alerts)
    return (
        <div className="cards">
            {alerts.map((alert) => (
                <CreateCard key={alert._id} {...alert}/>
            ))}
        </div>
    )
}
