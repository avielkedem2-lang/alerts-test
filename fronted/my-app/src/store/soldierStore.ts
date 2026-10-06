import { create } from "zustand";



type Soldier = {
  _id: string
  username: string,
  email: string,
  role: string,
  assignedArena: string
}


type SoldierType= {
    soldier: Soldier,
    setSoldier: (soldier: Soldier) => void
}




export const soldierStore = create<SoldierType>((set)=> ({
    soldier: {_id: '', username: '', email: '', role: "", assignedArena: "" },
    setSoldier: (soldier: Soldier) => set(() => ({soldier}))
}))