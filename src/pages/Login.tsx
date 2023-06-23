import React, { useState } from 'react'
import { ReactComponent as LendsqrLogo } from "../assets/images/lendsqr-logo.svg";
import PasswordInput from '../components/PasswordInput';
import loginImage from "../assets/images/login-image.svg";

const Login = () => {

    const [formData,setFormData]  = useState({email:"",password:""})
    const [formErrorData, setFormErrorData] = useState({email:"",password:""})

    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if (formData.email === "") {
            setFormErrorData((errorState) => {
              return { ...errorState, email: "Email is required" };
            });
          } else {
            setFormErrorData((errorState) => {
              return { ...errorState, email: "" };
            });
          }
          if (formData.password === "") {
            setFormErrorData((errorState) => {
              return { ...errorState, password: "Password is required" };
            });
          } else {
            setFormErrorData((errorState) => {
              return { ...errorState, password: "" };
            });
          }
          if (Object.values(formData).some((data) => data === "")) {
            return;
          }
    }

  return (
    <section className="login" >
        <div className='login__container' >
            <LendsqrLogo className='logo' />
            <section className="login__main-container">
                <div className='login__photo-illustration-container' >
                    <img src={loginImage} alt="" className='photo-illustration'  />
                </div>
                <div className='login__form-container'>
                        <h3>Welcome!</h3>
                        <p>Enter details to login</p>
                    <form action="" className='login__form' onSubmit={(e)=>handleFormSubmit(e)}>
                        <div>
                            <small>   {formErrorData.email}</small>
                            <input type="email" placeholder='Email' value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} required />
                        </div>
                        <div> 
                       
                        <small> {formErrorData.password}</small>
                            <PasswordInput value={formData.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setFormData({...formData,email:e.target.value})} required />
                        </div>
                        <p style={{"cursor":"pointer"}} >Forgot Password?</p>
                        <button>LOG IN</button>
                    </form>
                </div>
            </section>

        </div>
    </section>
  )
}

export default Login