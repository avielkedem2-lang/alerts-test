import { useRef } from "react";


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
    const alert = useRef<Alert>({ displayName: "", description: "", priority: "", arena: "", status: "", lat: 0, lon: 0 })    
    return (
        <div onSubmit={(e) => {
            e.preventDefault()
            
            
        }}>
            <form >
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

                <input type="number" placeholder="lat" onChange={(e) => alert.current = { ...alert.current, lat: JSON.parse(e.target.value) }} />
                <input type="number" placeholder="lon" onChange={(e) => alert.current = { ...alert.current, lon: JSON.parse(e.target.value) }} />

                <button type="submit">submit</button>
            </form>
        </div>
    )
}
