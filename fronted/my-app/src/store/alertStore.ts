import { create } from "zustand";



type Alert = {
    _id: string,
    displayName: string,
    description: string,
    priority:string,
    arena: string,
    status: string,
    lat: number,
    lon: number
};


type AlertsType = {
    alerts: Alert[],
    setAlerts: (alerts: Alert[]) => void,
};


export const alertStore = create<AlertsType>((set) => ({
    alerts: [],
    setAlerts: (alerts: Alert[]) => set(() => ({alerts}))
}))