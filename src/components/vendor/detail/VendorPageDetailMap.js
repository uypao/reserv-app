import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { Text,
  Card,
  CardItem,
  Body,
  Left
} from 'native-base';
import { getRegionForCoordinates } from '../../../helper/location';

class VendorPageDetailMap extends Component {

  render(){
    let { latitude, longitude } =this.props.address;
    return(
      <Card>
        <CardItem cardBody>
          <MapView
            style={{height:250, flex: 1}}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.00001,
              longitudeDelta: 0.0060
            }}
            >
            <MapView.Marker
              key={1}
              coordinate={{latitude,longitude}}
              />
          </MapView>
      </CardItem>
      </Card>
    )
  }
}

export default VendorPageDetailMap;
