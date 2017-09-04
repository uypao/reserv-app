import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';

class BookingPage extends Component {
  render() {
    return(
      <Header
       title={'booking'}/>
    )
  }
}

export default connect()(BookingPage);
