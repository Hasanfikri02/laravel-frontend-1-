import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/auth/login"
import Register from "./pages/auth/Register"
import Products from "./pages/Products"

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    
    </BrowserRouter>
    </>
  )
}
