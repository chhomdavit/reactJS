import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Announcement from './component/Announcement';
import MainLogo from './component/MainLogo';
import Navbar from './component/navbar/Navbar';
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import StaffPage from "./pages/StaffPage";
import TeacherPage from "./pages/TeacherPage";


function App() {
  return (
    <BrowserRouter>
    <Announcement/>
    <MainLogo/>
    <Navbar/>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/staffpage' element={<StaffPage />} />
          <Route path='/teacherpage' element={<TeacherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
