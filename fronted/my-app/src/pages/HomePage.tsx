import { Link, Outlet } from "react-router"
import { soldierStore } from "../store/soldierStore"
import { useFetch } from "../Hooke/useFetch"
import { alertStore } from "../store/alertStore"

export default function HomePage() {
    const token = localStorage.getItem("token")
    useFetch("http://localhost:3000/api/alerts", token!)

    const soldier = soldierStore(s => s.soldier)
    const logOut = () => {
        localStorage.removeItem("token")
    }
    console.log(soldier);
    
    return (
        <div>
            <p>name: {soldier.username} </p>
            <p>role: {soldier.role} </p>
            <Link to={"/create"}><button>To create</button></Link>
            <Link to={"/map"}><button>go to map</button></Link>
            <Link to={"/all-cards"}><button>All cards</button></Link>
            <Link to={"/get-alert/:id"}><button>get alert </button></Link>
            <Link to={"/login"}><button onClick={logOut}>logout</button></Link>
            <Outlet />
        </div>
    )
}
