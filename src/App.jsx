import { Route, Routes } from "react-router-dom"
import path from "./utils/path"
import './App.css'
import './index.css'

import { About, Booking, Contact, Home, Public, Service } from "./public"

function App() {
  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.ABOUT} element={<About />} />
          <Route path={path.SERVICE} element={<Service />} />
          <Route path={path.CONTACT} element={<Contact />} />
          <Route path={path.BOOK} element={<Booking />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
