import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AllTvShows from './pages/AllTvShows';
import Summary from './Components/Summary';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<AllTvShows />} />
          <Route path="/shows/:id" element={<Summary />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
