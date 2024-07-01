import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import MainOne from "./pages/MainOne"

function App() {


  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<MainOne/>}/>
      </Routes>
    </div>
  )
}

export default App
