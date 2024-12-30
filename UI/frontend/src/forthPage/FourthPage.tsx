import React, { useState } from 'react';
import './FourthPage.css';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const FourthPage: React.FC = () => {
    const navigate = useNavigate();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const nameRegx = /([a-zA-Z]{3,30}\s*)+/;
    const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    function handleName(e:React.ChangeEvent<HTMLInputElement>){

        setName(e.target.value);

        const value = e.target.value;

        if (!value.trim()){
            setNameError("Name is required");
        }
        else if (!nameRegx.test(value)){
            setNameError("Invalid name");
        }
        else{
            setNameError("");
        }
    }

    function handleEmail(e:React.ChangeEvent<HTMLInputElement>){

        setEmail(e.target.value);

        const value = e.target.value;

        if (!value.trim()){
            setEmailError("Email is required");
        }
        else if (!emailRegx.test(value)){
            setEmailError("Invalid email");
        }else{
            setEmailError("");
        }

    }

    function handlePassword(e:React.ChangeEvent<HTMLInputElement>){

        setPassword(e.target.value);

        const value = e.target.value;

        if (!value.trim()){
            setPasswordError("Password is required");
        }
        else if (!passwordRegx.test(value)){
            setPasswordError("Invalid password");
        }else{
            setPasswordError("");
        }
    }


    // const handleSubmit = async (e:React.FormEvent) => {

    //     e.preventDefault();

    //     setSuccessMessage('');
    //     setErrorMessage(' ');

    //     if (!name) setNameError("name is required");
    //     if (!email) setNameError("email is required");
    //     if (!password) setNameError("password is required");

    //     if (!name || !email || !password || nameError || emailError || passwordError){
    //         console.log("There has an error of input values");
    //         return;
    //     }

    //     if (!nameError && !emailError && !passwordError && name && email && password){
    //         navigate('/user', {state: {name, email}});
    //     }

    //     const formData = {name, email, password};

    //     try{
    //         const response = await fetch("http://localhost:8088/app/login", {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json',
    //             },
    //             body: JSON.stringify(formData)
    //         });

    //         if (response.ok){
    //             const data = await response.json();
    //             setSuccessMessage("User Saved Successfully");
    //             console.log('success', data);

    //             setName('');
    //             setEmail('');
    //             setPassword('');
    //         }
    //         else{
    //             const errorData = await response.json();
    //             setErrorMessage(errorData.message || 'Login Failed!');
    //         }
    //     }catch(error){
    //         console.error('error: ',error);
    //         setErrorMessage('Error, while commiunicate with server');
    //     }

    // }

    const handleSubmit = async (e: React.FormEvent)=> {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
    
        if (!name) setNameError("name required");
        if (!email) setEmailError("email required");
        if (!password) setPasswordError("password required");
    
        if (nameError || emailError || passwordError || !name || !email || !password){
            console.log("Can't submit form has an error, fix it and go foward");
            return;
        }

        if (!nameError && !emailError && !passwordError && name && email && password){
                    navigate('/user', {state: {name, email, password}});
                }
    
        const formData = {name, email, password};
    
        try {
          const response = await fetch("http://localhost:8088/app/login", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData)
          });
    
          if (response.ok){
              const data = await response.json();
              setSuccessMessage('Login Successful!');
              console.log('success', data);
    
              setName(' ');
              setEmail(' ');
              setPassword('');

          }else {
              const errorData = await response.json();
              setErrorMessage(errorData.message || 'Login Failed!');
          }
        } catch(error) {
          console.error('error', error);
          setErrorMessage("An error occured while communicate with the server");
        }
      }


  return (
    <div className='wrapper'>
    <div className='main'>
        <h2>Wellcome Back</h2>
        <h6>Sign to your account</h6>

    <form onSubmit={handleSubmit}  method='GET'>

    {successMessage && <div className="success">{successMessage}</div>}
    {errorMessage && <div className="failed">{errorMessage}</div>}


        <div className='name-wrapper'>
            <label htmlFor="inputename" className="form-label">Name</label>
            <input type="text" name='name' value={name} id="inputename" className="form-control" aria-describedby="name" onChange={handleName}/>
            {nameError && <div className='error-pop'>{nameError}</div>}
        </div>

        <div className='email-wrapper'>
            <label htmlFor="inputemail" className="form-label">Email</label>
            <input type="email" name='email' value={email} id="inputemail" className="form-control" aria-describedby="email" onChange={handleEmail}/>
            {emailError && <div className='error-pop'>{emailError}</div>}
        </div>

        <div className='password-wrapper'>
            <label htmlFor="inputPassword5" className="form-label">Password</label>
            <input type="password" name='password' value={password} id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" onChange={handlePassword}/>
            {passwordError && <div className='error-pop'>{passwordError}</div>}
        </div>

        <div className="btn-wrapper">
            <button id="btn2" type="submit" className="btn btn-primary">Sign In</button>
        </div>

        <div className="signup-section">
            <p>Don't have an account? <a href='https://accounts.google.com/lifecycle/steps/signup/name?continue=https://www.google.com/search?q%3Dgoogle%2Bsign%2Bup%26oq%3Dgoogle%2Bsign%2B%26gs_lcrp%3DEgZjaHJvbWUqBwgBEAAYgAQyCggAEAAYsQMYgAQyBwgBEAAYgAQyBggCEEUYOTIHCAMQABiABDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCTE2MzUwajBqN6gCALACAA%26sourceid%3Dchrome%26ie%3DUTF-8&ddm=1&dsh=S487536449:1735537875437453&ec=GAlAAQ&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en&TL=AE--LlwlcmP4Et2YVlK9V0fG_v87YEH26NNxVwwF-tWskLCaFHVam6cXQXCXKez7'>Sign Up</a></p>
        </div>

        <div className="or-section">
            <p>Or with</p>
        </div>

        <a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgoogle%2Bmail%2Bsign%2Bup%26sca_esv%3D6d51cb78c616c442%26sxsrf%3DADLYWIL39pFe2PIZWHlBDPSKT0g2-BzpSA%253A1735412410985%26ei%3DukpwZ_TuO4DhseMP4KikuAE%26oq%3Dgoogle%2Bmail%2B%26gs_lp%3DEgxnd3Mtd2l6LXNlcnAiDGdvb2dsZSBtYWlsICoCCAAyChAAGIAEGEMYigUyChAAGIAEGBQYhwIyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBxAAGIAEGAoyBRAAGIAESN1OUMUIWLpEcAR4AZABAJgB0gGgAYIQqgEGMC4xMi4xuAEDyAEA-AEBmAIRoAKHEcICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIZEC4YgAQYsAMY0QMYQxjHARjIAxiKBdgBAcICChAjGIAEGCcYigXCAhAQABiABBixAxhDGIMBGIoFwgIWEC4YgAQYsQMY0QMYQxiDARjHARiKBcICDRAAGIAEGLEDGEMYigXCAgsQABiABBiRAhiKBcICExAAGIAEGLEDGEMYgwEYyQMYigXCAgsQABiABBiSAxiKBcICBRAuGIAEmAMAiAYBkAYMugYECAEYCJIHBjQuMTIuMaAHvnI%26sclient%3Dgws-wiz-serp&ec=GAlAAQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1338709899%3A1735412454109376&ddm=1" className='gogl-wrapper'>
            <FcGoogle id='icon'/>
            <label htmlFor="icon">Sign in with Google</label>
        </a>

        <a href='https://www.icloud.com/mail/' className='appl-wrapper'>
            <FaApple id='icon2'/>
            <label htmlFor="icon2">Sign in with Apple</label>
        </a>
    </form>
    </div>
    </div>
  );
};

export default FourthPage;