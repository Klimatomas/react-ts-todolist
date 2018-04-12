import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import CryptoMain from "./pages/CryptoMain";
import ToDoListMain from "./pages/ToDoListMain";

class Routes extends React.Component<{}, {}> {
  public render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={ToDoListMain} />
          <Route exact path="/crypto" component={CryptoMain} />
        </Layout>
      </Router>
    );
  }
}

export default Routes;
