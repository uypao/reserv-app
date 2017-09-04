import { VENDORS_FETCH,
  VENDORS_FETCH_SUCCESS } from './types';
import axios from 'axios';
import config from '../../config.json';

export const vendorsFetch = () => {
  let url = `${config.reservApi}/vendor`;
  return (dispatch) => {
    dispatch({ type: VENDORS_FETCH });
    axios.get(url)
    .then((res) => {
      let vendors = res.data.message;
      dispatch(vendorsFetchSuccess(vendors));
    })
  }
}

export const vendorsFetchSuccess = (vendors) => {
  return (dispatch) => {
    dispatch({ type: VENDORS_FETCH_SUCCESS, payload: vendors })
  }
}
