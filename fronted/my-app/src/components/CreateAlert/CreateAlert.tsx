import { useRef, useState } from "react";
import { createAlert } from "../../fetch";


type Alert = {
    displayName: string,
    description: string,
    priority: string,
    arena: string,
    status: string,
    lat: number,
    lon: number
};



export default function CreateAlert() {
    const alert = useRef<Alert>({ displayName: "", description: "", priority: "Low", arena: "North", status: "Active", lat: 0, lon: 0 })
    const [error, setError] = useState('')
    return (
        <div onSubmit={(e) => {
            e.preventDefault()
            const token = localStorage.getItem("token")
            createAlert(alert.current, token!).then((data) => {
                if (data.data) {
                    console.log("ddddddddd");
                } else {
                    setError(data.message)
                }
            })

        }}>
            <form >
                <input type="text" placeholder="displayName" required onChange={(e) => alert.current = { ...alert.current, displayName: e.target.value }} />
                <input type="text" placeholder="description" required onChange={(e) => alert.current = { ...alert.current, description: e.target.value }} />
                <select name="" id="" required onChange={(e) => alert.current = { ...alert.current, priority: e.target.value }}>
                    <option value="" disabled>priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Critical">Critical</option>
                </select>

                <select name="" id="" required onChange={(e) => alert.current = { ...alert.current, arena: e.target.value }}>
                    <option value="" disabled>arena</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="Center">Center</option>
                </select>


                <select name="" id="" required onChange={(e) => alert.current = { ...alert.current, status: e.target.value }}>
                    <option value="" disabled>status</option>
                    <option value="Active">Active</option>
                    <option value="Handled">Handled</option>
                </select>

                <input type="text" placeholder="lat" required onChange={(e) => alert.current = { ...alert.current, lat: JSON.parse(e.target.value) }} />
                <input type="text" placeholder="lon" required onChange={(e) => alert.current = { ...alert.current, lon: JSON.parse(e.target.value) }} />

                <button type="submit">submit</button>
                <br />
                {error && (
                    <p>{error}</p>
                )}
            </form>
        </div>
    )
}
