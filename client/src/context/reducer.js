import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  TOGGLE_SIDEBAR,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  TRACK_CLICK_BEGIN,
  TRACK_CLICK_SUCCESS,
  TRACK_CLICK_ERROR,
  PAYMENT_METHOD_SUCCESS,
  PAYMENT_METHOD_ERROR,
} from './actions';
import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'red',
      alertText: 'Please provide all values!',
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar };
  }

  if (action.type === PAYMENT_METHOD_SUCCESS) {
    return {
      ...state,
      showAlert: true,
      alertType: 'green',
      alertText: 'Payment method added successfully',
    };
  }

  if (action.type === PAYMENT_METHOD_ERROR) {
    return {
      ...state,
      showAlert: true,
      alertType: 'red',
      alertText: action.payload.msg,
    };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      accountLocation: action.payload.location,
      showAlert: true,
      alertType: 'green',
      alertText: 'User Created! Redirecting...',
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'red',
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      accountLocation: action.payload.location,
      showAlert: true,
      alertType: 'green',
      alertText: 'Login Successful! Redirecting...',
    };
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'red',
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: '',
      accountLocation: '',
    };
  }

  // if (action.type === TRACK_CLICK_BEGIN) {
  //   return { ...state, isLoading: true };
  // }

  // if (action.type === TRACK_CLICK_SUCCESS) {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     clickCount: action.payload.clickCount,
  //   };
  // }

  // if (action.type === TRACK_CLICK_ERROR) {
  //   return { ...state, isLoading: false, alertText: 'Failed to track click' };
  // }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
