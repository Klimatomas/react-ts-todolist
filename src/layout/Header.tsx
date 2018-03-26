import React = require("react");
import { Link } from "react-router-dom";

class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <header className="app-header">
          <div className="">TO DO LIST</div>
        </header>
      </>
    );
  }
}

export default Header;
