import React, { useState } from 'react'
import "./css/login.css"
import SignUp from './SignUp';

function Login() {

  const [signIn,SetSignIn] = useState(false);

   const ShowSignUp= (e)=>{
      e.preventDefault();
      SetSignIn(true);
   }

  return (

    <>
    <div className="login">
          <div className='login_header'>
            <img src="https://media.licdn.com/dms/image/C560BAQEX064ru3x52A/company-logo_200_200/0/1641387693839/zithas_logo?e=2147483647&v=beta&t=x9EKG9nX6NTUPD-x3QbwTl4b1m1RAkfgEQxKtOrL-98" alt="" className='login_logo'/>
             
          </div>

          <div className="login_body">

          {
            signIn ? (<SignUp/>) : (
              <>

              <h1>Welcome to Zithas Technologies Pvt. Ltd.</h1>
                
              <form className='login_form' onSubmit={ShowSignUp}>
                <input type="text" placeholder='Zithas.in'/>
                <button >Get Started</button>
              </form>

              </>
              )
           }
         
          </div>

          <div className='login_gradient'>

         </div>
    </div>
    </>
  )
}

export default Login