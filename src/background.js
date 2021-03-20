console.log('Starting Browser Plugin Boilerplate...');

if (!browser) {
  var browser = chrome;
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { saveState, loadState } from './localStorage';

class PluginInterface extends Component {
  constructor(props) {
    super(props);
    this.state = props.initialState;
  }

  render() {
    saveState(this.state);

    return (
      <div>
        <h1>Plugin Interface</h1>
      </div>
    );
  }
}
PluginInterface.defaultProps = {
  initialState: {},
};

let container = document.getElementById('component');

container && loadState().then(initialState => {
  ReactDOM.render(
    <PluginInterface
      initialState={initialState}
    />
    , container
  );
});
