import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

import {Router, Route} from 'react-router';
// TODO: investigate Connected Router
//import {ConnectedRouter} from 'react-router-redux';
import App from '../containers/App';
import About from '../containers/About/About.js';

class Root extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history}>
          <div>
            <Route component={App} exact path="/" />
            <Route component={About} path="/about" />
          </div>
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
