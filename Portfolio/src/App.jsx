import { Routes, Route, useLocation, } from "react-router-dom"
import Landing from './view/Landing/landing'

import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Landing></Landing>
      </Routes>
    </div>
  )
}

export default App
