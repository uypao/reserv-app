import React from 'react';
import { Text, ListItem, Thumbnail, Icon,Body,  Right } from 'native-base';
import { Alert } from 'react-native';

const VendorPageListItem = ({ vendor, onPressListItem }) => {

  const onPress = () =>{
    onPressListItem(vendor._id);
  }

  return(
    <ListItem button
      onPress={onPress}>
      <Thumbnail
         size={40}
        source={{uri: 'https://unsplash.it/200/300/?random'}}/>
        <Body>
          <Text>
            {vendor.business_name}
          </Text>
          <Text ellipsizeMode='tail'
            numberOfLines={1}
            note>
            {vendor.business_detail}
          </Text>
        </Body>
    </ListItem>
  )
}

export default VendorPageListItem;
