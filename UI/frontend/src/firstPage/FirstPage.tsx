import { useEffect } from 'react';
import "./FirstPage.css";
import 'animate.css';
import { useNavigate } from 'react-router-dom';


function FirstPage(){
  // const [navigateToSecondPage, setNavigateToSecondPage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/second');
    }, 5000); 
    return () => clearTimeout(timer); 
  }, [navigate]);


  return (
    <div className='first-page'>
      <div className='first-wrapper'>

      <div className="melting-text-container">
        <h1 className='animate__animated animate__fadeInRight animate__delay-2s' id='text'>Waravita</h1>
        <h1 className='animate__animated animate__fadeInRight animate__delay-2s' id='text'>Bakery & Cafe</h1>
        <img className='animate__animated animate__fadeInRight animate__delay-2s' src="src/assets/logo/premium FLOUR FOODS (1).jpg" alt="logo" />
      </div>

      </div>
    </div>
  );
};

export default FirstPage;