
import { Route, Routes } from 'react-router'
import './App.css'
import AlertsMap from './components/Map/AlertsMap'
import { useFetch } from './Hooke/useFetch'

function App() {
  const {data} = useFetch("http://localhost:3000/api/alerts")
  console.log(data);
  
  return (
    <>
      <Routes>
        <Route path='/' element={<AlertsMap alerts={data}/>}/>
      </Routes>
    </>
  )
}

export default App
