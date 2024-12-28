// import React from 'react';
// import { useEffect, useState } from 'react';
import './SecondPage.css';
// import ThirdPage from '../thirdPage/ThirdPage';
import { useNavigate } from 'react-router-dom';

function SecondPage() {
//1st Method
//Third page navigation is can do with this methods also
    // const [navigateToThird, setNavigateToThird] = useState(false);

    // const handleThirdPageRoute = ()=>{
    //     setTimeout(()=>{
    //         setNavigateToThird(true);
    //     }, 100);       
    // };

    // if(navigateToThird){
    //     return <ThirdPage/>
    // }

//2nd Method
const handleThirdPageRoute = () => {

        const navigate = useNavigate();

        setTimeout(()=>{
            navigate('/third')
        },100);
    }

  return (
    <div className='second-wrapper'>
        <img src="src/assets/images/c.png" alt="1st" />
        <h3>Taste the best foods in the town</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit mollitia iusto facilis delectus eligendi, perferendis magnam, ut sunt exercitationem quia adipisci labore fugiat hic sapiente rerum voluptatibus non aliquam?</p>
        <div className='btn-wrapper'>
            <button id="btn1" type="button" className="btn btn-primary" onClick={handleThirdPageRoute}>Continue</button>
            <button id="btn2" type="button" className="btn btn-outline-dark">skip</button>
        </div>
    </div>
  );
};

export default SecondPage;