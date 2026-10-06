import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../fetchSoldiers";




type SoldierLogin = {
    password: string,
    email: string,
}



export default function Login() {
    const soldier = useRef<SoldierLogin>({ password: '', email: '' });
    const [error, setError] = useState('')
    const [isError, setIsError] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                login(soldier.current).then((data) => {
                    if (data.data) {
                        localStorage.setItem("token", data.data.token)
                        return navigate("/soldier")
                    } else {
                        setError(data.message)
                        setIsError(true)
                    }
                })
            }}>
                <input type="email" placeholder="email" required onChange={(e) => soldier.current = { ...soldier.current, email: e.target.value }} />
                <input type="password" placeholder="password" required onChange={(e) => soldier.current = { ...soldier.current, password: e.target.value }} />
                <button type="submit">submit</button>
                <br />
                {isError && (
                    <p>{error}</p>
                )}
            </form>
        </div>
    )
}
