
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Sidebar } from './components/Sidebar'
import Navbar from './components/Navbar'
import Homepage from './page/Homepage'
import Association from './page/Association'
import Owners from './page/Owners'
import OwnerAssociationDetail from './components/OwnerAssociationDetail'

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

                  <Route index path="Association" element={<Association />} />
                  <Route index path="Owners" element={<Owners />} />
                  <Route index path="/owner-detail/:lastName" element={<OwnerAssociationDetail/>} />

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
