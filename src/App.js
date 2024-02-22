
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import RaiseRequest from './Components/RaiseRequest';
import FAQ from './Components/FAQ';
import Homepage from './Components/Homepage'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
     
     
     <Router>
        <Header/>
          <Routes>
            <Route path="/FAQ" element={<FAQ/>}/>
            <Route path="/Homepage" element={<Homepage/>}/>
            <Route path="/RaiseRequest" element={<RaiseRequest/>}/>
            <Route path="/Footer" element={<Footer/>}/>
          </Routes>
       </Router>
      
      {/* <HomePage/> */}
      {/* <RaiseRequest/>
      <Footer/> */}
    
    </div>
  );
}

export default App;
