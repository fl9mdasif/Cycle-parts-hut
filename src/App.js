
import './App.css';
import Home from './pages/Home/Home';
import Navbar from '../src/pages/Shared/Navbar'
import Footer from './pages/Shared/Footer';
import NotFound from './pages/Shared/NotFound'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Blog from './pages/Blog/Blog';
import PrivateAuth from './pages/Login/PrivateAuth';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        {/* Public page */}
        <Route path="/" element={<Home />}> </Route>
        <Route path="/home" element={<Home />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/signup" element={<SignUp />}> </Route>
        {/* private Page*/}
        <Route path="/blog" element={<PrivateAuth><Blog /></PrivateAuth>}> </Route>
        <Route path='*' element={<NotFound />}></Route>


      </Routes>
      <Footer />

    </div>
  );
}

export default App;
