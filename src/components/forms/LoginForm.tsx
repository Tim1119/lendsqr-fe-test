import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import ThreeDotLoader from "../loaders/ThreeDotLoader";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  
    const [showPassword,setShowPassword] =useState(false)
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
    

    // This my submit function simulates sending the user data i.e username and password 
    // to the server and getting a 200 success request after 2 seconds
    const onSubmit: SubmitHandler<LoginFormData> = (_data) => {
      setLoading(true);
      // Simulate a login request
      setTimeout(() => {
        setLoading(false);
        navigate('/dashboard/users');
      }, 2000); // Simulate the 2-second loading time
    };

 

  const togglePassword = ()=>{
    setShowPassword(!showPassword)
  }
  
  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
        <div className='login-form__input-container' >
            <input type="email" placeholder="Email"  {...register("email", { required: true })} />
            {errors.email && <span className="login-form__error-message" >Email Address is required</span>}
        </div>
        <div className='login-form__input-container'>
            <div className='login-form__input-password' >

            <input type={showPassword ? "text" : "password"} placeholder="Password"  {...register("password", { required: true })} />
            <span  className="login-form__password-toggler" onClick={togglePassword} >{showPassword ? "HIDE" : "SHOW"}</span>
            </div>
            {errors.password && <span className="login-form__error-message" >Password is required</span>}
        </div>
        <small >FORGOT PASSWORD ?</small>
        <button disabled={isLoading} >{isLoading ? "LOADING" : "LOG IN"} {isLoading && <ThreeDotLoader /> }</button>
       
    </form>
  )
}

export default LoginForm