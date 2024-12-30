import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FirstPage from './firstPage/FirstPage';
import SecondPage from './secondPage/SecondPage';
import ThirdPage from './thirdPage/ThirdPage';
import FourthPage from './forthPage/FourthPage';
import Account from './userAccount/Account';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/fourth" element={<FourthPage />} />
        <Route path="/user" element={<Account />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
