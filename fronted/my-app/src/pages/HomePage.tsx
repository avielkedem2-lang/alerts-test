import { useState } from "react"
import { Link } from "react-router"
import { alertStore } from "../store/alertStore"
import AlertsMap from "../components/Map/AlertsMap"

export default function HomePage() {
    const [but, setBut] = useState<boolean>(false)
    const alerts = alertStore(s => s.alerts)
    return (
        <div>
            <Link to={"/create"}><button>To create</button></Link>
            <Link to={"/map"}><button>go to map</button></Link>
            {/* <button></button>
            <button></button>
            <button></button> */}
        </div>
    )
}
