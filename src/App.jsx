import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Gal2024 from './pages/Gal2024';
import Gal2023 from './pages/Gal2023';
import Gal2022_Earlier from './pages/Gal2022_Earlier';

import Workshops_tech from './pages/workshops_tech';
import Events from './pages/Events';
import Achievements from './pages/Achievements';
import Gallery from './pages/Gallery';

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
        <Route path="/workshops_tech" element={<Workshops_tech/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/achievements" element={<Achievements/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;