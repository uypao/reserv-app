import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Container,
  View,
  Content,
  Text,
  Input,
  Button,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Badge,
  Spinner } from 'native-base';
import Header from '../../common/Header';
import { getRegionForCoordinates } from '../../../helper/location';
import VendorPageDetailHeader from './VendorPageDetailHeader';
import VendorPageDetailServices from './VendorPageDetailServices';
import VendorPageDetailMap from './VendorPageDetailMap';
import { goToBooking } from '../../../actions';

class VendorPageDetail extends Component {
  constructor(){
    super()
    this.goToBooking = this.goToBooking.bind(this);

    let asd = getRegionForCoordinates([{
      latitude: 49.935055,
      longitude: -97.200706,
    }]);
    console.log(asd);
  }

  goToBooking() {
    this.props.goToBooking();
  }

  render() {
    let { vendor } = this.props;
    return(
      <Container>
        <Header
          title={vendor.business_name}/>
        <Content padder>
          <VendorPageDetailHeader
            vendor={vendor}/>
          <VendorPageDetailServices
            services={vendor.services} />
          <VendorPageDetailMap
            address={vendor.address}/>

          {/* TODO: Reviews Component */}
          <Button
            onPress={this.goToBooking}
            block
            style={{ marginTop: 15, marginBottom: 30 }}>
              <Text>Book an Appointment</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = ({ vendors }, { navigation }) => {
  let id = navigation.state.params.payload.id;
  let vendor = _.find(vendors.data, {_id: id });
  return { vendor }
}

export default connect(mapStateToProps, { goToBooking })(VendorPageDetail);
