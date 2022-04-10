import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Course from './components/course/Course';
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/course' element={<Course/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
