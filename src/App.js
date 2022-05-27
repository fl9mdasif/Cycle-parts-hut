
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Navbar from '../src/pages/Shared/Navbar'
import Footer from './pages/Shared/Footer';
import NotFound from './pages/Shared/NotFound'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Blog from './pages/Blog/Blog';
import PrivateAuth from './pages/Login/PrivateAuth';
import Purchase from './pages/Home/Purchase'
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrder from './pages/Dashboard/MyOrder';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import ToolsOrParts from './pages/Home/ToolsOrParts';
// import Review from './pages/Home/Review';
import Reviews from './pages/Reviews/Reviews';
import Payment from './pages/Dashboard/Payment';
import MyPortfolio from './pages/Portfolio/MyPortfolio';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageProduct from './pages/Dashboard/ManageProduct';

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
        <Route path="/products" element={<ToolsOrParts />}> </Route>
        <Route path="/review" element={<Reviews />}> </Route>
        <Route path="/portfolio" element={<MyPortfolio />}> </Route>
        <Route path='/product/:productID' element={<PrivateAuth><Purchase /></PrivateAuth>}></Route>

        {/* Nested Routes */}
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<MyOrder />}></Route>
          <Route path="addreview" element={<AddReview />}></Route>
          <Route path="addproduct" element={<AddProduct />}></Route>
          <Route path="manageproduct" element={<ManageProduct />}></Route>
          <Route path='portfolio' element={<MyProfile />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
        </Route>

        {/* private Page*/}
        <Route path="/blog" element={<PrivateAuth><Blog /></PrivateAuth>}> </Route>
        <Route path='*' element={<NotFound />}></Route>


      </Routes>
      <ToastContainer></ToastContainer>
      <Footer />

    </div>
  );
}

export default App;
