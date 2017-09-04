import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,
  Content,
  Text,
  Header,
  Item,
  Input,
  Button,
  Icon,
  Spinner } from 'native-base';
import VendorPageList from './VendorPageList';
import { vendorsFetch,
  back,
  goToVendorDetail
 } from '../../actions';

class VendorPage extends Component {
  constructor(){
    super();
    this.onPressCancel = this.onPressCancel.bind(this);
    this.onPressListItem = this.onPressListItem.bind(this);
  }

  componentWillMount() {
    this.props.vendorsFetch();
  }

  renderContentList(){
    let { vendors, isLoading } = this.props;
    if (isLoading) return (<Spinner color='black' />)
    return (<VendorPageList
      onPressListItem={this.onPressListItem}
      vendors={vendors} />)
  }

  onVendorSearch() {

  }

  onPressCancel() {
    this.props.back();
  }

  onPressListItem(id) {
    this.props.goToVendorDetail(id);
  }

  render(){
    return(
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button
            transparent
            onPress={this.onPressCancel} >
            <Text>Cancel</Text>
          </Button>
        </Header>
        <Content>
          {this.renderContentList()}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = ({ vendors }) => {
  return {
    vendors: vendors.data,
    isLoading: vendors.isLoading,
    error: vendors.error
   };
}

export default connect(mapStateToProps, { back,
  goToVendorDetail,
  vendorsFetch }
)(VendorPage);
