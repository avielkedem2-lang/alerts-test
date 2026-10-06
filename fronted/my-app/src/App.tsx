
import { Route, Routes } from 'react-router'
import './App.css'
import AlertsMap from './components/Map/AlertsMap'
import { useFetch } from './Hooke/useFetch'
import HomePage from './pages/HomePage'
import { alertStore } from './store/alertStore'
import CreateAlert from './components/CreateAlert/CreateAlert'
import AllCards from './components/AllCards/AllCards'
import UpdateAlert from './components/UpdateAlert/UpdateAlert'
import GetAlert from './components/GetAlert/GetAlert'
import Register from './pages/Register'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Soldier from './pages/Soldier'

function App() {
  const alerts = alertStore(s => s.alerts)
  return (
    <>
      <Routes>
        <Route path='/register' element={<ProtectedRoute><Register /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<ProtectedRoute><HomePage /></ProtectedRoute>} >
          <Route path='/soldier' element={<ProtectedRoute><Soldier /></ProtectedRoute>} />
          <Route path='/create' element={<ProtectedRoute><CreateAlert /></ProtectedRoute>} />
          <Route path='/all-cards' element={<ProtectedRoute><AllCards /></ProtectedRoute>} />
          <Route path='/map' element={<ProtectedRoute><AlertsMap alerts={alerts} /></ProtectedRoute>} />
          <Route path='/update/:id' element={<ProtectedRoute><UpdateAlert /></ProtectedRoute>} />
          <Route path='/get-alert/:id' element={<ProtectedRoute><GetAlert /></ProtectedRoute>} />
        </Route>

        <Route path='*' element="404 not fond page" />
      </Routes>
    </>
  )
}

export default App
