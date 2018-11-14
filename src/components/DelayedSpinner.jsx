import React, { Component } from 'react';
import Spinner from './Spinner';

class DelayedSpinner extends Component {
  state = {
    show: false,
  };

  timerSub = null;

  componentDidMount() {
    this.timerSub = setTimeout(() => {
      this.setState({ show: true });
    }, 200);
  }

  componentWillUnmount() {
    clearTimeout(this.timerSub);
  }

  render() {
    const { show } = this.state;
    if (!show) {
      return null;
    }

    return <Spinner {...this.props} />;
  }
}

export default DelayedSpinner;
