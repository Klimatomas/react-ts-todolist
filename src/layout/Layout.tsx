import React = require("react");
import Footer from "./Footer";
import Header from "./Header";

class Layout extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="main">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
