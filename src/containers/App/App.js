import React, { Component } from "react";
import PropTypes from "prop-types";

// React Router Deps
import { Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";

// Redux Deps
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Redux Actions
import { actions } from "../../modules/app";

// Component styles
import { Wrapper } from "./App.styles.js";

// Component Assets & Deps
import Home from "../Home";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <Wrapper>
        <Home />
      </Wrapper>
    );
  }
}

App.propTypes = {
  app: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
