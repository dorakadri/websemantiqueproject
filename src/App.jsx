
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Sidebar } from './components/Sidebar'
import Navbar from './components/Navbar'
import Homepage from './page/Homepage'
import Eventpage from './page/Eventpage'

import Association from './page/Association'
import PostDetails from './page/PostDetails'
import Reclamations from "./page/Reclamations";
import Donations from './page/Donations';
import Forums from './page/Forums'
function App() {


  return (
    <Routes>
      <Route
        exact
        path="/*"
        element={
          <div className="flex h-screen">
            <Sidebar />
   
            <div className="flex-1  flex flex-col">
              <Navbar />
              <div className="flex-1 px-6 py-3 overflow-scroll">
                <Routes>
                  <Route index path="home" element={<Homepage />} />
                  <Route index path="forums" element={<Forums />} />
                  <Route  path="donations" element={<Donations />} />
                  <Route  path="Events" element={<Eventpage />} />


                  <Route  path="Association" element={<Association />} />
                  <Route  path="post/:id" element={<PostDetails />} />
                  <Route  path="reclamations" element={<Reclamations />} />
                </Routes>
              </div>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App