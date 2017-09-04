import React from 'react';
import { View, Text, Badge } from 'native-base';

const VendorPageDetailServices = ({ services }) => {
  let { servicesStyle, servicesTextStyle } = style;
  return (
    <View style={servicesStyle}>
      {services.map((service, i) => {
        return(
          <Badge
            key={i}
            info
            style={servicesTextStyle} >
            <Text>{service.name}</Text>
          </Badge>)
        })}
    </View>
  )
}

const style = {
  servicesStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  servicesTextStyle: {
    marginRight: 5,
    marginBottom: 15
  }
}

export default VendorPageDetailServices;
