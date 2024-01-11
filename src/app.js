import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import AboutUs from './pages/aboutUs';
import Profil from './pages/profil';
import useToken from './services/useToken';

const App = () => {
   const { token, setToken } = useToken();

   return (
      <>
         <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login setToken={setToken}/>} />
               <Route path="/about-us" element={<AboutUs />} />
               <Route path="/profil" element={<Profil />} />
         </Routes>
      </>
   );
};

export default App;
