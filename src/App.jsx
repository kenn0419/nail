import { Route, Routes, useLocation } from "react-router-dom"
import path from "./utils/path"
import './App.css'
import './index.css'
import { About, Booking, Contact, FormConfirm, Home, PickDate, Public, Service, Team, Thanks } from "./public"
import { Bounce, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"

function App() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowMenu(false);
  }, [location]);
  return (
    <div className="w-[100%]">
      <Routes>
        <Route path={path.PUBLIC} element={<Public showMenu={showMenu} setShowMenu={setShowMenu} />}>
          {/* <Route path={path.HOME} element={<Home />} />
          <Route path={path.ABOUT_SERVICE} element={<About />} />
          <Route path={path.ABOUT_TEAM} element={<Team />} />
          <Route path={path.SERVICE} element={<Service />} />
          <Route path={path.CONTACT} element={<Contact />} /> */}
          <Route path={`/`} element={<Booking />} />
          <Route path={path.PICK_DATE} element={<PickDate />} />
          <Route path={path.CONFIRM} element={<FormConfirm />} />
          <Route path={path.THANK} element={<Thanks />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  )
}

export default App
