import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";

import Header from "./Header";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter
          future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
        >
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/surveys" element={<Dashboard />} />
              <Route path="/surveys/new" element={<SurveyNew />} />
              <Route path="*" element={<h2>Page Not Found</h2>} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
