import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Gal2024 from './pages/Gal2024';
import Gal2023 from './pages/Gal2023';
import Gal2022_Earlier from './pages/Gal2022_Earlier';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/gallery2024' element={<Gal2024/>}/>
        <Route path='/gallery2023' element={<Gal2023/>}/>
        <Route path='/gallery2022-earlier' element={<Gal2022_Earlier/>}/>
      </Routes>
    </Router>
  );
}

export default App;