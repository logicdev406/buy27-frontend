import * as actionTypes from '../constants/orderConstants';
import axios from 'axios';

const Api = require('../../config/config');

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.CREATE_ORDER_REQUEST });

    const { data } = await axios.get(`${Api.LiveBackendUrl}/api/products`);

    dispatch({
      type: actionTypes.CREATE_ORDER_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.CREATE_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
