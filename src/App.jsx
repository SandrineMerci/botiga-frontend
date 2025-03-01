import './App.css'
import './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Blog from './components/Blog'
import Shop from './components/Shop'
import Vendors from './components/Vendors'
import Contact from './components/Contact'
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/UsestateHook'
import SinglePage from './components/SinglePage'
import HomePage from './components/HomePage'
import HomeProduct from './components/HomeProduct'
import DashboardLayout from './Dashboard/DashboardLayout'
import DashboardView from './Dashboard/DashboardView'


function App() {
  
   return(
    <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/Home' index element={<Home/>} />
          <Route path='/Shop' index element={<Shop/>}/>
         <Route path='/HomeProduct' index element={<HomeProduct/>}/>
          <Route path='/Vendors' index element={<Vendors/>}/>
          <Route path='/Blog' index element={<Blog/>}/>
          <Route path='/Contact' index element={<Contact/>}/>
          {/* <Route path='/Home2' index element={<Home2/>}/> */}
          <Route path='/View' element= {<HomePage/>}></Route>
          <Route path="/singlecard/:id" element={<SinglePage/>}/>
          </Route>
          <Route path="/Login" element={<Login />}>
          </Route>
        <Route path='/' element={<DashboardLayout/>}>
        <Route path='/dashboard' index element={<DashboardView/>}></Route>
        </Route>
        </Routes>
    </BrowserRouter>
   )
}

export default App