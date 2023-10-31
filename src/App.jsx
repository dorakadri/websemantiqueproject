
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Sidebar } from './components/Sidebar'
import Navbar from './components/Navbar'
import Homepage from './page/Homepage'
import ReclamationsPosts from "./page/ReclamationsPosts";
import ReclamationsExchanges from "./page/ReclamationsExchanges";
import Reponses from "./page/Reponses";


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
                  <Route index path="recposts" element={<ReclamationsPosts />} />
                     <Route index path="recexchanges" element={<ReclamationsExchanges />} />
                  <Route index path="reponses" element={<Reponses />} />
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
