
import { Route, Routes } from 'react-router'
import './App.css'
import AlertsMap from './components/Map/AlertsMap'
import { useFetch } from './Hooke/useFetch'
import HomePage from './pages/HomePage'
import { alertStore } from './store/alertStore'
import CreateAlert from './components/CreateAlert/CreateAlert'
import AllCards from './components/AllCards/AllCards'

function App() {
  useFetch("http://localhost:3000/api/alerts")
  const alerts = alertStore(s => s.alerts)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreateAlert />} />
        <Route path='/all-cards' element={<AllCards />} />
        <Route path='/map' element={<AlertsMap alerts={alerts} />} />
        <Route path='*' element="404 not fond page" />
      </Routes>
    </>
  )
}

export default App
