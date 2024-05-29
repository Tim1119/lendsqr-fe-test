import { useState } from "react";
import { useForm } from "react-hook-form";


const LoginForm = () => {

    const [showPassword,setShowPassword] =useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  const togglePassword = ()=>{
    setShowPassword(!showPassword)
  }
  
  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
        <div className='login-form__input-container' >
            <input type="email" placeholder="Email"  {...register("email", { required: true })} />
            {errors.email && <span className="login-form__error-message" >Email Address is required</span>}
        </div>
        <div>
            <div className='login-form__input-container login-form__input-password' >

            <input type={showPassword ? "text" : "password"} placeholder="Password"  {...register("password", { required: true })} />
            <span className="login-form__password-toggler" onClick={togglePassword} >{showPassword ? "HIDE" : "SHOW"}</span>
            </div>
            {errors.password && <span className="login-form__error-message" >Password is required</span>}
        </div>
        <small >FORGOT PASSWORD ?</small>
        <button  className="login-form__button" >LOG IN</button>
       
    </form>
  )
}

export default LoginForm