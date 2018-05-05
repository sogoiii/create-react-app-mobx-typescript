import * as React from 'react';

import './App.css';

import { inject, observer } from 'mobx-react';
import logo from './logo.svg';
import UiStore from "./stores/UiStore";

@inject('store')
@observer
class App extends React.Component<{store?: UiStore}, object> {

  public updateTheme = (e: React.SyntheticEvent<EventTarget>): void => {
    this.props.store.toggleTheme()
  }
  public render() {
    const { store } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React: Theme = {store.theme}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={store.toggleTheme}>Change theme string</button>
      </div>
    );
  }
}

export default App;
