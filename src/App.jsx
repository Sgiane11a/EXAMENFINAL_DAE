import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { Listado } from './pages/Listado'
import { Home } from './pages/Home'
import { Contactanos } from './pages/Contactanos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/listado" element={<Listado />} />
      <Route path='/contactanos' element={<Contactanos />} />
    </Routes>
    </>
  )
}

export default App
