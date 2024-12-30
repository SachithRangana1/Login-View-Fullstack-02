import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThirdPage.css'

const ThirdPage: React.FC = () => {
  const navigate = useNavigate();

  function handleFourthPageRoute(){
    navigate('/fourth');
  }

  function handleSkipRoute(){
    navigate('/fourth')
  }

  return (
    <div className='third-wrapper'>
      <img src="src/assets/images/x.png" alt="2nd" />
      <h3>Place your order now</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officiis odit soluta repellendus ducimus at quasi tenetur iusto exercitationem? Incidunt cumque nam eaque pariatur quasi quos iste reprehenderit blanditiis explicabo.</p>
      
      <div className='btn-wrapper'>
        <button id="btn1" type="button" className="btn btn-primary" onClick={handleFourthPageRoute}>Continue</button>
        <button id="btn2" type="button" className="btn btn-outline-dark" onClick={handleSkipRoute}>skip</button>
      </div>
    </div>
  );
};

export default ThirdPage;