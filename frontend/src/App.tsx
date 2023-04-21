import AppHeader from "./components/AppHeader"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import StudentEdit from "./pages/StudentEdit"
function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/edit" element={<StudentEdit />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
