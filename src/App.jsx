import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ListProducts from './pages/ListProducts'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ListProducts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
