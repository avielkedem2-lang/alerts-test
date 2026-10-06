import { useEffect, useState } from "react"
import { deleteSoldierFromServer, getSoldiers } from "../../fetchSoldiers"


type Soldier = {
  _id: string
  username: string,
  email: string,
  role: string,
  assignedArena: string
}


export default function AllSoldiers() {
  const [soldiers, setSoldiers] = useState<Soldier[]>()
  useEffect(() => {
    const token = localStorage.getItem("token")
    getSoldiers(token!).then((data) =>{
      console.log(data);
      setSoldiers(data)
    })
  },[])
  console.log(soldiers);
  
  const deleteSoldier = ()=> {
    
  }
  return (
    <div className="cards">
      {soldiers?.map((soldier) => (
        <section key={soldier._id} className="card">
          <h3>id: {soldier._id}</h3>
          <p>solder name: {soldier.username}</p>
          <p>email: {soldier.email}</p>
          <p>role: {soldier.role}</p>
          <p>assignedArena: {soldier.assignedArena}</p>
        </section>
      ))}
    </div>
  )
}
