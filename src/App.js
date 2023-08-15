import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NetflixSurf from './pages/NetflixSurf';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router basename='/Netflix_Clone'>
    <div className="App">
      <Routes>
      <Route exact path='/' Component={Home} />
      <Route path='/netflix-show' Component={NetflixSurf} />
      </Routes >
      <Footer />
    </div>  
    </Router>
  );
}

export default App;
