import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Button,
  Text
} from "native-base";
import Header from '../common/Header';
import { goToAccountDetail } from '../../actions';

class DashboardPage extends Component {
  constructor(){
    super()
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
  }
  render(){
    let { user } = this.state;
    return(
      <Container>
        <Header
          title={'Dashboard'} />

        <Text>WELCOME!!! {user.display_name }</Text>

      </Container>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { user: auth.user }
}

export default connect(mapStateToProps, { goToAccountDetail })(DashboardPage);
