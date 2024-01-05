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
import { API_URL_ORDERS } from "../../constants";
import checkResponse from "../../utils/response";
import { Dispatch } from "redux";
type MakeOrderData = {
  ingredients : Array<string>
}
type MakeOrderAction = ActionPostOrderSuccess | ActionPostOrderFailed | ActionOpenOrderModal
export function makeOrder(data : MakeOrderData) {
  return function (dispatch : Dispatch<MakeOrderAction>) {
    fetch(API_URL_ORDERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(checkResponse)
      .then((data) => {
        if (data.success) {
          dispatch({
            type: POST_ORDER_SUCCESS,
            id: data.order.number,
          });
          dispatch(openOrderModal());
        } else {
          dispatch({ type: POST_ORDER_FAILED });
        }
      })
      .catch(() => {
        dispatch({ type: POST_ORDER_FAILED });
      });
  };
}

export function openOrderModal() : ActionOpenOrderModal {
  return { type: OPEN_ORDER_MODAL };
}
export function closeOrderModal() : ActionCloseOrderModal{
  return { type: CLOSE_ORDER_MODAL };
}
