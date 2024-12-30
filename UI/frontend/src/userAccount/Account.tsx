import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './Account.css';

const Account: React.FC = () => {
//   const location = useLocation(); // Get the location object
//   const { name, email } = location.state || {}; // Access name and email from the state

const location = useLocation();
const {name, email} = location.state || {};

  return (
    <div className="user">
        <div className='slide'>
            <img src="src/assets/user/user.png" alt="user" className="user-img" />
        </div>
        <div className="user-info">
            <h3>Welcome, {name}!</h3>
            <p>Your Email: {email}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, eius officiis. Asperiores at architecto fugiat provident nisi illo nesciunt sit mollitia. Magni totam quisquam soluta asperiores debitis sequi. Autem, reiciendis.</p>
            <a href="./FirstPage.tsx">Go back</a>
        </div>
    </div>
  );
};

export default Account;
