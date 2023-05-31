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
            <NavLink to="examples" id="exampleButton" className="nav-button">
              Examples
            </NavLink>
            <NavLink
              to="social-impacts"
              id="societyButton"
              className="nav-button"
            >
              Social Impacts
            </NavLink>
            <NavLink
              to="fairness-metrics"
              id="fairnessButton"
              className="nav-button"
            >
              Fairness Metrics
            </NavLink>
            <NavLink
              to="processing"
              id="processingButton"
              className="nav-button"
            >
              Data Processing
            </NavLink>

            <NavLink to="technical" id="technicalButton" className="nav-button">
              Technical Details
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
