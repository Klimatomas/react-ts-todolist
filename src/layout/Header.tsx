import React = require("react");
import { Link } from "react-router-dom";

class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <header className="row bg-dark navbar-header">
          <div className="col-1">
            <Link to="/" className="text-white no-decoration">
              App Header
            </Link>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
