import { Link } from "react-router-dom"



function Navbar() {
  return (
    <>
    <header className="header">
    
    <Link to={"/Home"} className="Logo" >DENTAL CARE</Link>

    <nav className="navbar">
    <Link to={"/Home"}>Home</Link>
    <Link>About</Link>
    <Link>Galery</Link>
    <Link>Services</Link>
    <Link to={"/Login"}>Login</Link>
    
    </nav>
    </header>
    </>
  )
}

export default Navbar
