import React = require("react");
import { Link } from "react-router-dom";

class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <header className="">
          <div className="">
            <Link to="/" className="no-decoration">
              App Header
            </Link>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
