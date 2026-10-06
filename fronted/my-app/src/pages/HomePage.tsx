import { Link, Outlet } from "react-router"
import { soldierStore } from "../store/soldierStore"
import { useFetch } from "../Hooke/useFetch"
import { getSoldierFromServer } from "../fetchSoldiers"
import { useEffect, useState } from "react"
export default function HomePage() {
    const token = localStorage.getItem("token")
    useFetch("http://localhost:3000/api/alerts", token!)
    const soldier = soldierStore(s => s.soldier)
    const setSoldier = soldierStore(s => s.setSoldier);
    const [isRole, setIsRole] = useState<boolean>(false)
    // const role = 
    if (Object.keys(soldier).length === 0) {
        getSoldierFromServer(token!).then((data) => {
            console.log(data);
            setSoldier(data)
        })
    }
    const logOut = () => {
        localStorage.removeItem("token")
    }
    useEffect(() => {
        if (soldier.role === "admin") {
            setIsRole(true)
        }
    }, [soldier])
    return (
        <div>
            <p>name: {soldier.username} </p>
            <p>role: {soldier.role} </p>

            <Link to={"/map"}><button>go to map</button></Link>
            <Link to={"/all-cards"}><button>All cards</button></Link>
            <Link to={"/get-alert/:id"}><button>get alert </button></Link>
            <Link to={"/login"}><button onClick={logOut}>logout</button></Link>

            {isRole && (
                <section>
                    <Link to={"/create"}><button>To create</button></Link>
                    <Link to={"/register"}><button>To register</button></Link>
                    <Link to={"/all-soldiers"}><button>Get all soldiers</button></Link>
                    <Link to={"/delete"}><button>delete soldier</button></Link>
                </section>
            )}
            <Outlet />
        </div>
    )
}
