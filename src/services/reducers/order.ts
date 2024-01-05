import {
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL,
  ActionPostOrderSuccess,
  ActionPostOrderFailed,
  ActionOpenOrderModal,
  ActionCloseOrderModal,
} from "../actionTypes";
type orderState = {
  id: number;
  status: string;
  open_modal: boolean;
  post_order_success: boolean;
  post_order_failed: boolean;
};
const initialState: orderState = {
  id: 0,
  status: "",
  open_modal: false,
  post_order_success: false,
  post_order_failed: false,
};
type action =
  | ActionPostOrderSuccess
  | ActionPostOrderFailed
  | ActionOpenOrderModal
  | ActionCloseOrderModal;
const order = (state : orderState = initialState, action: action) : orderState => {
  switch (action.type) {
    case POST_ORDER_SUCCESS:
      return {
        ...state,
        id: action.id,
        post_order_success: true,
        post_order_failed: false,
        status: "Ваш заказ начали готовить",
      };
    case POST_ORDER_FAILED:
      return {
        ...state,
        post_order_success: false,
        post_order_failed: true,
      };
    case OPEN_ORDER_MODAL:
      return {
        ...state,
        open_modal: true,
      };
    case CLOSE_ORDER_MODAL:
      return {
        ...state,
        open_modal: false,
      };
    default:
      return state;
  }
};
export default order;
