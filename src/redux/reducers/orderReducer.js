import * as actionTypes from '../constants/orderConstants';

export const createOrderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ORDER_REQUEST:
      return {
        loading: true,
        order: {},
      };
    case actionTypes.CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case actionTypes.CREATE_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_ORDER_LIST_REQUEST:
      return {
        loading: true,
        orders: [],
      };
    case actionTypes.GET_USER_ORDER_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case actionTypes.GET_USER_ORDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getSingleOrderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_SINGLE_ORDER_REQUEST:
      return {
        loading: true,
        order: {},
      };
    case actionTypes.GET_SINGLE_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case actionTypes.GET_SINGLE_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_SINGLE_ORDER_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};
