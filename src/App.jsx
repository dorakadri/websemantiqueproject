
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Sidebar } from './components/Sidebar'
import Navbar from './components/Navbar'
import Homepage from './page/Homepage'

function App() {


  return (
    <Routes>

    
        <Route
          exact
          path="/*"
          element={
            <div className="flex h-screen">
     
              <Sidebar />
              {/* Main Content */}
              <div className="flex-1  flex flex-col">
                <Navbar />
                <div className="flex-1 px-6 py-3 overflow-scroll">
                  <Routes>
                  <Route index path="home" element={<Homepage />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />


  </Routes>
  )
}

export default App
