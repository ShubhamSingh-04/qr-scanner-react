import './App.css'
import QrCodeScanner from './components/QrCodeScanner.jsx'
import QRScannerPage from './pages/QRScannerPage.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path="/day1-attendance/mark-attendance" element={<QRScannerPage />} />
        <Route path="/day1-lunch/mark-done" element={<QRScannerPage />} />
        <Route path="/day1-dinner/mark-done" element={<QRScannerPage />} />
        <Route path="/day2-breakfast/mark-done" element={<QRScannerPage />} />
        
        <Route path='/QR' element={<QRScannerPage />} />
      </Routes>
    </>
  )
}

export default App
