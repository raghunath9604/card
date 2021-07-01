import { Component } from 'react';

class Card extends Component {
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
      <div className="card">
        <div className="head containers">
          <div className="flex ref-left s">
            <div className="title">Cancel / recall payment, GBP 1,000.00</div>
            <div className="subtitle">1234567890123456 (GB), KUIML Business Company</div>
          </div>
          <div className="flex">
            sfgfdg
          </div>
        </div>
        <div className="ref containers">
          <div className="left containers ref-left">
            <div className="flex bl">
              <div className="reference">
                Request reference
              </div>
              <div className="status">
                SET29383ABCH
              </div>
            </div>
            <div className="flex bl">
              <div className="reference">
                Category
              </div>
              <div className="status">
                Payment
              </div>
            </div>
            <div className="flex bl">
              <div className="reference">
                Request status
              </div>
              <div className="status">
                Pending authorisation
              </div>
            </div>
          </div>
          <div className="right">
            Full Details <span className="fa fa-home"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
