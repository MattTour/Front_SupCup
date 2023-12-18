import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Profil from './pages/profil';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
       </Routes>
    </>
 );
};

export default App;
