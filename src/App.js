import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AllTvShows from './pages/AllTvShows';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allTvShows" element={<AllTvShows />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
