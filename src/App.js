import logo from './logo.svg';
import './App.css';
import { toast } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import ContactUs from './components/ContactUs';
import Products from './components/Products';
import Login from './components/Login';
import CreateUser from './components/CreateUser';
import SearchUsers from './components/SearchUsers';
import ListOfUsers from './components/ListOfUsers';
import ProductDetail from './components/ProductDetail';
import TopProducts from './components/TopProducts';
import LastVisitedProducts from './components/LastVisitedProducts';

function App() {
  toast.configure();
  return (
    <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/news' element={<News />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/products' element={<Products />} />
            <Route path='/lastvisitedproducts' element={<LastVisitedProducts />} />
            <Route path='/topproducts' element={<TopProducts />} />
            <Route path='/login' element={<Login />} />
            <Route path='/createuser' element={<CreateUser />} />
            <Route path='/searchusers' element={<SearchUsers />} />
            <Route path='/listofusers' element={<ListOfUsers />} />
            <Route path='/product/:flavour' element={<ProductDetail />} />
            {/* <Route path='*' element={<NoSuchPage />} /> */}
          </Routes>
    </BrowserRouter>
  );
}

export default App;
