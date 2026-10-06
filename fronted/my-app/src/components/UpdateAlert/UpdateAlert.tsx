import { useRef, useState } from "react";
import { updateAlertById } from "../../fetch";
import { useNavigate, useParams } from "react-router";

type Alert = {
    displayName?: string,
    description?: string,
    priority?: string,
    arena?: string,
    status?: string,
    lat?: number,
    lon?: number
};



export default function UpdateAlert() {
    const id = useParams().id
    const alert = useRef<Alert>({})
    const [error, setError] = useState('')
    const navigate = useNavigate()
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (Object.keys(alert).length === 0) return (<p>you</p>)
                updateAlertById(id!,alert.current).then((data) => {
                    if (data.data) {
                        console.log("ddddddddd");
                        return navigate(-1)
                    } else {
                        setError(data.message)
                    }
                })

            }}>
                <input type="text" placeholder="displayName" onChange={(e) => alert.current = { ...alert.current, displayName: e.target.value }} />
                <input type="text" placeholder="description" onChange={(e) => alert.current = { ...alert.current, description: e.target.value }} />
                <select name="" id="" onChange={(e) => alert.current = { ...alert.current, priority: e.target.value }}>
                    <option value="" disabled>priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Critical">Critical</option>
                </select>

                <select name="" id="" onChange={(e) => alert.current = { ...alert.current, arena: e.target.value }}>
                    <option value="" disabled>arena</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="Center">Center</option>
                </select>


                <select name="" id="" onChange={(e) => alert.current = { ...alert.current, status: e.target.value }}>
                    <option value="" disabled>status</option>
                    <option value="Active">Active</option>
                    <option value="Handled">Handled</option>
                </select>

                <input type="text" placeholder="lat" onChange={(e) => alert.current = { ...alert.current, lat: JSON.parse(e.target.value) }} />
                <input type="text" placeholder="lon" onChange={(e) => alert.current = { ...alert.current, lon: JSON.parse(e.target.value) }} />

                <button type="submit">submit</button>
                <br />
                {error && (
                    <p>{error}</p>
                )}
            </form>
        </div>
    )
}
