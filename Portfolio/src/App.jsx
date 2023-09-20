import { Routes, Route, useLocation, } from "react-router-dom"
import Landing from './view/Landing/landing'

import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
      </Routes>
    </div>



  )
}

export default App
