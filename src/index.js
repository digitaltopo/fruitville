import {AppContainer} from 'react-hot-loader';
import React from 'react';
import {render} from 'react-dom';

import {default as Root, store, history} from './core';

// The HTML element to mount React to
const mountNode = document.getElementById('root');

// Render the app
const renderApp = () => {
  render(
    <AppContainer>
      <Root history={history} store={store} />
    </AppContainer>,
    mountNode
  );
};

renderApp();

// Hot Module Reloading
if (module.hot) {
  module.hot.accept('./core/rootComponent.js', () => renderApp());
}
