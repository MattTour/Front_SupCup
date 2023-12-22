import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import AboutUs from './pages/aboutUs';

const App = () => {
   return (
      <>
         <Routes>
               <Route path="/" element={<Home />} />
               {/* <Route path="/profil" element={<Profil />} /> */}
               <Route path="/login" element={<Login />} />
               <Route path="/about-us" element={<AboutUs />} />
         </Routes>
      </>
   );
};

export default App;
