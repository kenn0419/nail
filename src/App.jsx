import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import path from "./utils/path"
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
