import {
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL,
} from "../actionTypes";
const initialState = {
  id: 0,
  status: "",
  open_modal: false,
  post_order_success: false,
  post_order_failed: false,
};

const order = (state = initialState, action) => {
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
