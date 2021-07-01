import { Component } from 'react';
import AppHeader from './AppHeader';
import AppSideBar from './AppSideBar';
import AppMain from './AppMain';
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
        <AppHeader />
        <div className="container">
          <AppSideBar />
          <AppMain />
        </div>
      </div>
    )
  }
}

export default App;
