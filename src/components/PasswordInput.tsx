import { useState } from 'react'

const PasswordInput = ({...props}) => {

  const [passwordShown,setPasswordShown] = useState(false)
  const togglePasswordType = () =>{
    setPasswordShown(!passwordShown)
  }
  return (
    <div className='password-input-container' >
      <input type={passwordShown ? "text":"password"}  placeholder='Password' />
      <span role="button" className="change-visibility" onClick={togglePasswordType} style={{ cursor: "pointer" }}>
        {passwordShown === false ? "SHOW" : "HIDE"}
      </span>
    </div>
  )
}

export default PasswordInput