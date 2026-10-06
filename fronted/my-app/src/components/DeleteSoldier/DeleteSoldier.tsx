import { useRef, useState } from "react"
import { deleteSoldierFromServer } from "../../fetchSoldiers"







export default function DeleteSoldier() {
    const solider = useRef('')
    const [error, setError] = useState('')
    const [isError, setIsError] = useState<boolean>(false)
    const message = useRef('')
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                const token = localStorage.getItem("token")
                deleteSoldierFromServer(solider.current, token!).then((data) => {
                    if (data.message) {
                        setError(data.message)
                        setIsError(true)
                    }else{
                        console.log(data);     
                        message.current = data
                    }
                })
            }}>
                <input type="text" placeholder="Enter soldier id" onChange={(e) => solider.current = e.target.value} />
                <button type="submit">submit</button>
                {isError && (
                    <p>{error}</p>
                )}
                {/* {message.current && (
                    <p>{message.current}</p>
                )} */}
            </form>
        </div>
    )
}
