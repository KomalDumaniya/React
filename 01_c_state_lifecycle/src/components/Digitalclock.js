import React, { Component } from "react";

class Digitalclock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    return (
      <>
        <div>
        {this.state.time}
        </div>
      </>
    );
  }
}

export default Digitalclock;
