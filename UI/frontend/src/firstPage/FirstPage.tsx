import { useEffect, useState } from 'react';
import "./FirstPage.css";
import 'animate.css';
import SecondPage from '/home/sachith/Documents/Login view (Angular + Java)/UI/ui/src/secondPage/SecondPage.tsx';


function FirstPage(){
  const [navigateToSecondPage, setNavigateToSecondPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNavigateToSecondPage(true);
    }, 5000); 
    return () => clearTimeout(timer); 
  }, []);

  if (navigateToSecondPage) {
    return <SecondPage />;
  }

  return (
    <div className='first-wrapper'>
        <h1 className='animate__animated animate__fadeInRight animate__delay-1s'>Wara vites</h1>
        <img  className='animate__animated animate__fadeInRight animate__delay-2s' src="src/assets/logo/premium FLOUR FOODS (1).jpg" alt="logo" />
    </div>
  );
};

export default FirstPage;