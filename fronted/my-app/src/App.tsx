
import { Route, Routes } from 'react-router'
import './App.css'
import AlertsMap from './components/Map/AlertsMap'
import { useFetch } from './Hooke/useFetch'
import HomePage from './pages/HomePage'
import { alertStore } from './store/alertStore'

function App() {
  const {data} = useFetch("http://localhost:3000/api/alerts")
  const setAlerts = alertStore(s => s.setAlerts)
  setAlerts(data)
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/map' element={<AlertsMap alerts={data}/>}/>
      </Routes>
    </>
  )
}

export default App
