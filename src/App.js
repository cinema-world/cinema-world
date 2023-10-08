import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" Component={Home} ></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
