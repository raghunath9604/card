import { Component } from 'react';
import './App.css';

import './assets/css/layout.css';
import './assets/css/card.css';
import Layout from './Layout/Layout'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount = async () => {
    // await this.getTimeZones();
  }

  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    )
  }
}

export default App;
