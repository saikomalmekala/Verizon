
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Components/Homepage';
import RaiseRequest from './Components/RaiseRequest';

function App() {
  return (
    <div className="app">
      <Header/>
      <HomePage/>
      <RaiseRequest/>
      <Footer/>
    
    </div>
  );
}

export default App;
