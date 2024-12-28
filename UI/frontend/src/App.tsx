import './App.css'
import FirstPage from './firstPage/FirstPage'
import 'animate.css';
import { Routes, Route } from 'react-router-dom';
import SecondPage from './secondPage/SecondPage';
import ThirdPage from './thirdPage/ThirdPage';


function App() {

  return (
    <div>
      <FirstPage/>
      
        <Routes>
          {/* <Route path='/second' element={<SecondPage/>} /> */}
          <Route path='/third' element={<ThirdPage/>} />
        </Routes>
    </div>
  )
}

export default App
