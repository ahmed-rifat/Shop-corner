import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
         <Route path='/' element={<Home></Home>}> </Route>
         <Route path='/home' element={<Home></Home>}> </Route>
         <Route path='/reviews' element={<Review></Review>}> </Route>
         <Route path='/dashboard' element={<Dashboard/>}> </Route>
         <Route path='/blogs' element={<Blogs/>}> </Route>
         <Route path='/about' element={<About/>}> </Route>
         <Route path='*' element={<ErrorPage/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
