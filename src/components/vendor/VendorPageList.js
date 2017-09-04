import React from 'react';
import { List } from 'native-base';
import VendorPageListItem from './VendorPageListItem';

const VendorPageList = ({ vendors, onPressListItem }) => {
  return(
    <List dataArray={vendors}
      renderRow={(vendor) =>
        <VendorPageListItem
          onPressListItem={onPressListItem}
          vendor={vendor}
          />
      }>
    </List>

  )
}

export default VendorPageList;
