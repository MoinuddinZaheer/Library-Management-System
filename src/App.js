
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
import AdminLogin from './Components/AdminLogin';
import UserLogin from './Components/UserLogin';

const App=() =>{
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}></Route>
        <Route path='/user-login' element={<UserLogin/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
