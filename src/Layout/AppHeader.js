import { Component } from 'react';
class AppHeader extends Component {
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
      <div className="header">
        This  is Header
      </div>
    )
  }
}

export default AppHeader;
