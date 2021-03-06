import React from 'react'
import './Login.css'
import logo from '../../assets/images/logo.svg';
import register from '../../assets/images/register.svg';
import { useHistory } from 'react-router';


function Login() {

  const history = useHistory();
  const toggleSignIn = () => {
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
  }

  const toggleSignUp = () => {
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
  }

  const handleLogin = () => {
    if ("success") {
      history.push("/all-offers")
    }
  }

  const handleSignup = () => {
    if ("success") {
      history.push("/all-offers")
    }
  }

  return (
    <div>
      <body>
        <div class="container">
          <div class="forms-container">
            <div class="signin-signup">
              <form action="#" class="sign-in-form">
                <h2 class="title">Sign in</h2>
                <div class="input-field">
                  <i class="fas fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div class="input-field">
                  <i class="fas fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <input onClick={handleLogin} type="submit" value="Login" class="btn solid" />
                <p class="social-text">Or Sign in with social platforms</p>
                <div class="social-media">
                  <a href="#" class="social-icon">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fab fa-google"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </form>
              <form action="#" class="sign-up-form">
                <h2 class="title">Sign up</h2>
                <div class="input-field">
                  <i class="fas fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div class="input-field">
                  <i class="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div class="input-field">
                  <i class="fas fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <input onClick={handleSignup} type="submit" class="btn" value="Sign up" />
                <p class="social-text">Or Sign up with social platforms</p>
                <div class="social-media">
                  <a href="#" class="social-icon">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fab fa-google"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div class="panels-container">
            <div class="panel left-panel">
              <div class="content">
                <h3>New here ?</h3>
                <p>
                  Sign up Now! And enjoy the quality services through our web app
            </p>
                <button onClick={toggleSignIn} class="btn transparent" id="sign-up-btn">
                  Sign up
            </button>
              </div>
              <img src={logo} class="image" alt="" />
            </div>
            <div class="panel right-panel">
              <div class="content">
                <h3>One of us ?</h3>
                <p>
                  Sign in Now! And enjoy the quality services through our web app
            </p>
                <button onClick={toggleSignUp} class="btn transparent" id="sign-in-btn">
                  Sign in
            </button>
              </div>
              <img src={register} class="image" alt="" />
            </div>
          </div>
        </div>


      </body>
    </div>
  )
}

export default Login
