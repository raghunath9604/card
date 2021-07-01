import { Component } from 'react';
import Card from './../Component/Card'
class AppMain extends Component {
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
      <div className="main">
        <Card />
      </div>
    )
  }
}

export default AppMain;
