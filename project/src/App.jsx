import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import PetInfo from './PetInfo.jsx'
// import Map from './Map.jsx'

function App() {

  return <div >
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/petinfo" element={<PetInfo />} />
      </Routes>
    </div>
  </BrowserRouter>
</div>
}

export default App