import { Component } from 'react';
class AppSideBar extends Component {
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
      <div className="sidebar">
        This  is Header
      </div>
    )
  }
}

export default AppSideBar;
