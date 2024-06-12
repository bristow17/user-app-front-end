import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLogin/>}/>
      <Route path='/register' element={<UserRegistration/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
