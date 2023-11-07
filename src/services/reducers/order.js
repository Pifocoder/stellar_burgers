import { MAKE_ORDER, OPEN_ORDER_MODAL, CLOSE_ORDER_MODAL } from "../../constants";
const initialState = {
  id: 0,
  status: "",
  open_modal: false,
};
const order = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_ORDER:
      return {
        id: action.id,
        status: "Ваш заказ начали готовить",
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
