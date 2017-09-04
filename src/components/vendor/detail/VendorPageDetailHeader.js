import React from 'react';
import { Image } from 'react-native';
import { Text,
  Card,
  CardItem,
  Body,
  Left
} from 'native-base';

const VendorPageDetailHeader = ({ vendor }) => {
  let { cardStyle,
    detailHeaderStyle,
    detailContentStyle,
    bodyTextStyle,
    imageStyle } = style
  return (
    <Card style={cardStyle}>
      <CardItem cardBody>
        <Image
          source={{uri: 'https://unsplash.it/300/200?random'}}
          style={imageStyle}/>
      </CardItem>
      <CardItem>
        <Left>
          <Body style={bodyTextStyle}>
            <Text style={detailHeaderStyle}>{vendor.business_name}</Text>
            <Text style={detailContentStyle}>{vendor.business_detail}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
}

const style = {
  cardStyle:{
    marginBottom: 15
  },
  detailHeaderStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 0
  },
  detailContentStyle: {
    fontSize: 12,
    textAlign: 'justify'
  },
  bodyTextStyle:{
    marginLeft: 0
  },
  imageStyle: {
    height: 200,
    width: null,
    flex: 1
  }
}


export default VendorPageDetailHeader;
