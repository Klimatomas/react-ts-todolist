import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import ToDoListMain from "./pages/ToDoListMain";

class Routes extends React.Component<{}, {}> {
  public render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={ToDoListMain} />
        </Layout>
      </Router>
    );
  }
}

export default Routes;
