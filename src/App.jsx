import { Route, Routes } from "react-router-dom"
import path from "./utils/path"
import './App.css'
import './index.css'

import { Home, Public } from "./public"

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
