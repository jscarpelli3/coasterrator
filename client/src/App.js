import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Detail from './components/Detail'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/coaster" element={<Detail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
