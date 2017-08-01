import React, { Component } from "react";
import PropTypes from "prop-types";

import SVG from "react-svg";

// React Router Deps
import { Link } from "react-router-dom";

// Redux Deps
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Redux Actions
import { actions } from "../../modules/app";

// Component styles
import { Wrapper } from "./Home.styles.js";

// Component Assets & Deps
import Announce from "../../components/Announce";
import Hero from "../../components/Hero";
import SectionOne from "../../components/Sections/SectionOne";
import Neighbors from "../../components/Sections/Neighbors";
import Formula from "../../components/Sections/Formula";
import Numbers from "../../components/Sections/Numbers";

import logo from "../../assets/img/logo.svg";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  /*
    componentWillMount() {}

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) {}

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {}
 */

  render() {
    return (
      <Wrapper>
        <Announce />
        <Hero />
        <SectionOne />
        <Neighbors />
        <Formula />
        <Numbers />
      </Wrapper>
    );
  }
}

Home.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
