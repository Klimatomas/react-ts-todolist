import React = require("react");

class Footer extends React.Component<{}, {}> {
  public render() {
    return (
      <footer className="row bg-dark text-white">
        <div className="col-12 text-right">something footer-ish</div>
      </footer>
    );
  }
}

export default Footer;
