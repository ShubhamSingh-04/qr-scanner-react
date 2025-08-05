import './App.css'
import QrCodeScanner from './components/QrCodeScanner.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path="/day1-attendance" element={<QrCodeScanner />} />
        <Route path="/day1-lunch" element={<QrCodeScanner />} />
        <Route path="/day1-dinner" element={<QrCodeScanner />} />
        <Route path="/day2-breakfast" element={<QrCodeScanner />} />
        
        <Route path='/QR' element={<QrCodeScanner />} />
      </Routes>
    </>
  )
}

export default App
