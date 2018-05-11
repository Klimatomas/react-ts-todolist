import React = require("react");

class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <header className="app-header">
          <div>TO DO LIST</div>
        </header>
      </>
    );
  }
}

export default Header;
