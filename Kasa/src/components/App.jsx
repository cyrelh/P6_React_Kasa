import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import About from '../pages/About.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import ApartmentPage from "../pages/ApartmentPage.jsx"
import '../styles/App.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartment/:id" element={<ApartmentPage/>} />
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
