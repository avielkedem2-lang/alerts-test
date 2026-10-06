import { useRef, useState } from "react"
import { Link } from "react-router"
import { getAlertById } from "../../fetch";




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




export default function GetAlert() {
    const id = useRef('')
    const [alert, setAlert] = useState<Alert>()
    const [error, setError] = useState('')
    const [isAlert, setIsAlert] = useState(false)
    const [isError, setIsError] = useState<boolean>(false)
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                getAlertById(id.current).then((data) => {
                    console.log(data);
                    if (data.data) {
                        setAlert(data.data)
                        setIsAlert(true)
                    } else {
                        setError(data.message)
                        setIsError(true)
                    }
                })
            }}>
                <input type="text" placeholder="Enter id" required onChange={(e) => id.current = e.target.value} />
                <button type="submit">submit</button>
                <br />
                {isError && (
                    <div><p>{error}</p></div>
                )}
                {isAlert && (
                    <div className="card">
                        <h3>id: {alert?._id}</h3>
                        <p>displayName: {alert?.displayName}</p>
                        <p>description: {alert?.description}</p>
                        <section className="section-card">
                            <p>priority: {alert?.priority}</p>
                            <p>arena: {alert?.arena}</p>
                            <p>status: {alert?.status}</p>
                            <p>lat: {alert?.lat}</p>
                            <p>lon: {alert?.lon}</p>
                        </section>
                        <Link to={`/update/${alert?._id}`}><button>update alert</button></Link>
                        {/* <button onClick={deleteAlert}>delete alert</button>
                                {error && (
                                    <p>{error}</p>
                                )} */}
                    </div>
                )}
            </form>
        </div>
    )
}
