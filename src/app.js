import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profil" element={<Profil />} /> */}
          <Route path="/login" element={<Login />} />
       </Routes>
    </>
 );
};

export default App;
