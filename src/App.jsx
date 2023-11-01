
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Sidebar } from './components/Sidebar'
import Navbar from './components/Navbar'
import Homepage from './page/Homepage'
import Eventpage from './page/Eventpage'
import Association from './page/Association'
import PostDetails from './page/PostDetails'
import ReclamationsPosts from "./page/ReclamationsPosts";
import ReclamationsExchanges from "./page/ReclamationsExchanges";
import Reponses from "./page/Reponses";
import Donations from './page/Donations';
import Forums from './page/Forums';
import Owners from './page/Owners';
import Charity from './page/Charity';
import Profile from './page/Profile'
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
   
            <div className="flex-1  flex flex-col">
              <Navbar />
              <div className="flex-1 px-6 py-3 overflow-scroll">
                <Routes>
                <Route index path="/" element={<Homepage />} />
                  <Route index path="forums" element={<Forums />} />
                  <Route  path="donations" element={<Donations />} />
                  <Route  path="charity" element={<Charity />} />
                  <Route  path="Events" element={<Eventpage />} />
                  <Route index path="Association" element={<Association />} />
                  <Route index path="Owners" element={<Owners />} />
                  <Route index path="/owner-detail/:lastName" element={<OwnerAssociationDetail/>} />
                  <Route  path="post/:id" element={<PostDetails />} />
                  <Route index path="userprofile/:id" element={<Profile/>} />
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