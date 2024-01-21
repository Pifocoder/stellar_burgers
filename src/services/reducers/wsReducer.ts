import { OrderType } from "../../utils/type";

const initialState = {
  wsConnected: false,
  orders : Array<OrderType>
};

export const wsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_GET_MESSAGE:
      return {
        ...state,
        messages: state.messages.length
          ? [
              ...state.messages,
              { ...action.payload, timestamp: new Date().getTime() / 1000 },
            ]
          : [{ ...action.payload, timestamp: new Date().getTime() / 1000 }],
      };
    case WS_USER_NAME_UPDATE:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
