import { useEffect, useState } from "react";
import { getSoldierFromServer } from "../fetchSoldiers";
import { soldierStore } from "../store/soldierStore";



type Soldier = {
  _id: string
  username: string,
  email: string,
  role: string,
  assignedArena: string
}



export default function Soldier() {
  const [error, setError] = useState('')
  const [isError, setIsError] = useState<boolean>(false);
  const [soldier, setSoldier] = useState<Soldier>()
  const [isSolder, setIsSoldier] = useState<boolean>(false)
  const token = localStorage.getItem("token")
  const setSoldierStore = soldierStore(s => s.setSoldier)
  useEffect(() => {
    getSoldierFromServer(token!).then((data) => {
      if (typeof (data) === "object") {
        setSoldier(data);
        setSoldierStore(data)
        setIsSoldier(true)
      } else {
        setIsError(true)
        setError(data.message)
      }
    })
  }, [token])


  
  return (
    <div>
      {isError && (
        <p>{error}</p>
      )}
      {isSolder && (
        <div className="card">
          <h3>id: {soldier?._id}</h3>
          <p>soldier name: {soldier?.username}</p>
          <p>email: {soldier?.email} </p>
          <p>role: {soldier?.role}</p>
          <p>assignedArena: {soldier?.assignedArena}</p>
        </div>
      )}
      
    </div>
  )
}
