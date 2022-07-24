import {
  QRCODE_LIST_REQUEST,
  QRCODE_LIST_SUCCESS,
  QRCODE_LIST_FAIL,
  QRCODE_CREATE_RESET,
  QRCODE_CREATE_FAIL,
  QRCODE_CREATE_SUCCESS,
  QRCODE_CREATE_REQUEST,
  QRCODE_UPDATE_REQUEST,
  QRCODE_UPDATE_SUCCESS,
  QRCODE_UPDATE_FAIL,
  QRCODE_UPDATE_RESET,
} from "../constants/QrcodesConstants";

export const qrcodeListReducer = (state = { qrcodes: [] }, action) => {
  switch (action.type) {
    case QRCODE_LIST_REQUEST:
      return { loading: true, qrcodes: [] };
    case QRCODE_LIST_SUCCESS:
      return {
        loading: false,
        qrcodes: action.payload.qrcodes,
        //   pages: action.payload.pages,
        //   page: action.payload.page,
      };
    case QRCODE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//   export const qrcodeDeleteReducer = (state = {}, action) => {
//     switch (action.type) {
//       case QRCODE_DELETE_REQUEST:
//         return { loading: true }
//       case QRCODE_DELETE_SUCCESS:
//         return { loading: false, success: true }
//       case QRCODE_DELETE_FAIL:
//         return { loading: false, error: action.payload }
//       default:
//         return state
//     }
//   }

export const qrcodeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case QRCODE_CREATE_REQUEST:
      return { loading: true };
    case QRCODE_CREATE_SUCCESS:
      return { loading: false, success: true, qrcode: action.payload };
    case QRCODE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case QRCODE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const qrcodeUpdateReducer = (state = { qrcode: {} }, action) => {
  switch (action.type) {
    case QRCODE_UPDATE_REQUEST:
      return { loading: true };
    case QRCODE_UPDATE_SUCCESS:
      return { loading: false, success: true, qrcode: action.payload };
    case QRCODE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case QRCODE_UPDATE_RESET:
      return { qrcode: {} };
    default:
      return state;
  }
};
