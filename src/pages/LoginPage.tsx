import '../styles/pages/login.scss'
import lendsqrLogo from '../assets/images/logo.svg'
import lendsqrLoginIllustration from '../assets/images/login-illustration.svg'
import LoginForm from '../components/forms/LoginForm'

const LoginPage = () => {
  return (
    <div className='login-page' >
      <div className="login-page__container">
        <section className='login-page__left-container' >
          
            <img src={lendsqrLogo} className='login-page__logo' alt="lendsqr-logo" />
         
          <div className='login-page__illustration-container'>
            <img src={lendsqrLoginIllustration} className='login-page__illustration' alt="lendsqr-login-illustration" />
          </div>
        </section>
        <section className='login-page__right-container' >

          <img className='test' src={lendsqrLogo} alt="logo for small screens" />

          <div className='login-page__form-container' >
           <h3 >Welcome!</h3>
            <p >Enter details to login.</p>
            <LoginForm />
          </div>
        </section>
        
      </div>
    </div>
  )
}

export default LoginPage