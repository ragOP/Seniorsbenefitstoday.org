import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import NotFound from './pages/404';

import S from './pages/7'

import Visits from "./pages/visits";


import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

import Tsf from './pages/Tsf';
import Unlock from './pages/unlock';
import Temp from './pages/temp';
function App() {
 console.log('s');
  return (
    
    <Router>
      <div className="App">
        <Routes>
          {/* c */}

          <Route  path="/"  element = {<S />} />
          <Route  path="/sfmedi-unlock"  element = {<Unlock />} />
          <Route path = "/engmed-temp" element = {<Temp/>} />
          <Route path = "/engmed-tsf" element = {<Tsf/>} />
       
     
        
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
         


          <Route path = "/view" element = {<Visits />} />
          <Route path = "/*" element = {<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
