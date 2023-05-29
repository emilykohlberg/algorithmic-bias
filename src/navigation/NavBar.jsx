import { Outlet, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="main-layout">
      <header className="header">
        <nav className="nav-bar">
          <NavLink to="/" id="biasButton" className="heading-title">
            Algorithmic Bias
          </NavLink>
          <div className="main-nav-bar">
            <NavLink to="example" id="exampleButton" className="nav-button">
              Examples
            </NavLink>
            <NavLink to="society" id="societyButton" className="nav-button">
              Impacts
            </NavLink>
            <NavLink
              to="processing"
              id="processingButton"
              className="nav-button"
            >
              Data Processing
            </NavLink>

            <NavLink to="technical" id="technicalButton" className="nav-button">
              Technical
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
