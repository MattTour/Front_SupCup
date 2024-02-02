import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import AboutUs from './pages/aboutUs';
import Profil from './pages/profil';
import Bars from './pages/bars';
import Sports from './pages/sports';
import BarDetails from './pages/barDetails';
import useToken from './services/useToken';
import EventDetails from './pages/eventDetails';
import SportDetails from './pages/sportDetails';

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
               <Route path="/sports" element={<Sports />} />
               <Route path="/bar/:id" element={<BarDetails />} />
               <Route path="/event/:id" element={<EventDetails />} />
               <Route path="/sport/:id" element= {<SportDetails />} />
         </Routes>
      </>
   );
};

export default App;
