import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ListProducts from './pages/ListProducts'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ListProducts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
