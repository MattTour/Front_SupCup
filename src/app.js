import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import AboutUs from './pages/aboutUs';
import Profil from './pages/profil';
import Bars from './pages/bars';
import useToken from './services/useToken';

const App = () => {
   const { setToken } = useToken();

   return (
      <>
         <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login setToken={setToken}/>} />
               <Route path="/about-us" element={<AboutUs />} />
               <Route path="/profil" element={<Profil />} />
               <Route path="/bars" element={<Bars />} />
         </Routes>
      </>
   );
};

export default App;
