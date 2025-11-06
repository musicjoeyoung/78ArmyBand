import './App.scss'

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import Contact from './pages/Contact/Contact'
import Ensembles from './pages/Ensembles/Ensembles'
import ErrorNotFound from './pages/ErrorNotFound/ErrorNotFound'
import Footer from './components/Footer/Footer'
import History from './pages/History/History'
import Home from './pages/Home/Home'
import Jobs from './pages/Jobs/Jobs'
import Landing from './pages/Landing/Landing'
import Media from './pages/Media/Media'
/* import MeetTheBand from './pages/MeetTheBand/MeetTheBand' */
import Navbar from './components/Navbar/Navbar'
import TermsOfUse from './pages/TermsOfUse/TermsOfUse'
import UpArrow from './components/UpArrow/UpArrow'

console.log(
  '%c🌐 Want a stunning website?? 🚀 %cReach out to%c Joe Young %cjoseph.m.young2@gmail.com',
  'color: #51355a; font-size: 18px; font-weight: bold; text-shadow: 2px 2px 4px rgba(81, 53, 90, 0.5);',
  'color: #3498db; font-size: 18px; font-weight: bold; text-decoration: underline;',
  'color: #e74c3c; font-size: 18px; font-weight: bold;',
  'color: #e67e22; font-size: 18px; font-weight: bold;'
);

function App() {
  /*   const location = useLocation();
  
    const show78ABLayout = location.pathname !== '/welcome';
   */
  return (
    <>
      {/* {show78ABLayout && */} <Navbar />{/* } */}
      <Routes>
        <Route path="/welcome" element={<Landing />} />
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        {/* <Route path="/meettheband" element={<MeetTheBand />} /> */}
        <Route path="/ensembles" element={<Ensembles />} />
        <Route path="/media" element={<Media />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorNotFound />} />
        <Route path="termsofuse" element={<TermsOfUse />} />
      </Routes>
      <Footer />
      <UpArrow />
      {/*       {show78ABLayout && <Footer />}
      {show78ABLayout && <UpArrow />} */}
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
