import { Link } from "react-router-dom"
import { FaEnvelope,FaUser,FaLock } from "react-icons/fa"
function Registration() {
  return (
   
    <div className="Registration-box">
    <div className="form-box Register">
    <form action="">
    <h1 className="title">Registration</h1>
    <div className="input-box">
    <input type="text" placeholder="Username" required></input>
    <FaUser className="icon"/>
    </div>
    <div className="input-box">
      <input type="password" placeholder="password" required />
      <FaLock className="icon"/>
      </div>
    <div className="input-box">
    <input type="email" placeholder="Email" required />
    <FaEnvelope className="icon"/>
    </div>
    <div className="remember-forgot">
   <label> <input type="checkbox"/>I agree to the terms and conditions </label>
   <Link>Forgot password</Link>
   
    </div>
    

    <button className="button" type="submit">Register</button>

    <div className="register-link"><p className="P">Already have an account ? <Link to={"/Login"}>Login</Link></p>
    </div>
    
    </form>
    </div>
 
  </div>
   
  )
}

export default Registration
