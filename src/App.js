import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        
         <Route path='/home' element={<Home></Home>}> </Route>
         <Route path='/reviews' element={<Review></Review>}> </Route>
         <Route path='/dashboard' element={<Home></Home>}> </Route>
         <Route path='/blogs' element={<Home></Home>}> </Route>
         <Route path='/about' element={<Home></Home>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
