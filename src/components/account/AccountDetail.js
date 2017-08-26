import React, { Component } from 'react';
import {
  Container
} from "native-base";
import Header from '../common/Header';

class AccountDetail extends Component {
  render(){
    return(
      <Container>
        <Header
          title={'Account detail'} />

      </Container>
    )
  }
}

export default AccountDetail;
