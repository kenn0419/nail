import { Route, Routes } from "react-router-dom"
import path from "./utils/path"
import './App.css'
import './index.css'
import { About, Booking, Contact, FormConfirm, Home, PickDate, Public, Service } from "./public"
import { Bounce, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

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
          <Route path={path.PICK_DATE} element={<PickDate />} />
          <Route path={path.CONFIRM} element={<FormConfirm />} />
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
