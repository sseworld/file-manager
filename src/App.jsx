import { Route, Routes } from 'react-router-dom'
import './App.css'

import { Login, Register, HomePage, DashboardPage } from "./pages"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </div>
  )
}

export default App
