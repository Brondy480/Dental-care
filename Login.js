import { Link } from "react-router-dom";
import {FaLock, FaUser} from "react-icons/fa"



function Login() {
  return (
    <div className="Wrapper">
      <div className="form-box login">
      <form action="">
      <h1 className="title">Login</h1>
      <div className="input-box">
      <input type="text" placeholder="Username" required></input>
      <FaUser className="icon"/>
      </div>
      <div className="input-box">
      <input type="password" placeholder="password" required />
      <FaLock className="icon"/>
      </div>
      <div className="remember-forgot">
     <label> <input type="checkbox"/>Remember me </label>
     <Link>Forgot password</Link>
      </div>

      <button className="button" type="submit">Login</button>

      <div ></div>
      <p className="P">Dont have an account ? <Link to={"/Registration"} className="register-link">Register</Link></p>
      </form>
      </div>
   
    </div>
  )
}

export default Login;
