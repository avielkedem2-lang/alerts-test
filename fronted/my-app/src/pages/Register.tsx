import { useRef, useState } from "react"
import { register } from "../fetchSoldiers"
import { useNavigate } from "react-router";


type Soldier = {
    username: string,
    password: string,
    email: string,
    role: string,
    assignedArena: string
}


export default function Register() {
    const soldier = useRef<Soldier>({ username: '', password: '', email: '', role: "arena_user", assignedArena: "North" });
    const [error, setError] = useState('')
    const [isError, setIsError] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                register(soldier.current).then((data) => {
                    if (data.data) {
                        return navigate("/login")
                    } else{
                        setError(data.message)
                        setIsError(true)
                    }
                })
            }}>
                <input type="text" placeholder="name" required onChange={(e) => soldier.current = {...soldier.current, username: e.target.value}}/>
                <input type="email" placeholder="email" required onChange={(e) => soldier.current = {...soldier.current, email: e.target.value}}/>
                <input type="password" placeholder="password" required onChange={(e) => soldier.current = {...soldier.current, password: e.target.value}}/>

                <select name="" id="" onChange={(e) => soldier.current = {...soldier.current, role: e.target.value}}>
                    <option value="" disabled>role</option>
                    <option value="arena_user">arena_user</option>
                    <option value="general_user">general_user</option>
                    <option value="admin">admin</option>
                </select>

                <select name="" id="" onChange={(e) => soldier.current = {...soldier.current, assignedArena: e.target.value}}>
                    <option value="" disabled>assignedArena</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="Center">Center</option>
                    <option value="All">All</option>
                </select>
                <button type="submit">submit</button>
                <br />
                {isError && (
                    <p>{error}</p>
                )}
            </form>
        </div>
    )
}
