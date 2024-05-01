import  "../Styles/NavBar.css";
export default function Navbar() {
    return (
      <nav className="Nav">
        <a href="/" className="Nav-Title">
          <img src="../Img/Logo.png" className="Nav-img" />
        </a>
        <ul>
          <li className="SearchBar">
            <form action="">
              <input type="text" name="Q" />
              <button>
                <img src="../Img/magnifying-glass.png"  />
              </button>
            </form>
          </li>
  
          <li className="abril-fatface-regular">
            <a href="/">HOME</a>
          </li>
          
          <li className="abril-fatface-regular">
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/" className="logIn">
              <img src="../Styles/user.png" alt="user image" width={30} height={30}></img>
              Login
            </a>
          </li>
          <li>
            <div className="SU">
              <a href="/" className="signUp">
                Sign Up for free
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
  