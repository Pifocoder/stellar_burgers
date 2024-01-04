import {
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL,
  actionPostOrderSuccess,
  actionPostOrderFailed,
  actionOpenOrderModal,
  actionCloseOrderModal,
} from "../actionTypes";
import { API_URL_ORDERS } from "../../constants";
import checkResponse from "../../utils/response";
import { Dispatch } from "redux";
type makeOrderData = {
  ingredients : Array<string>
}
type makeOrderAction = actionPostOrderSuccess | actionPostOrderFailed | actionOpenOrderModal
export function makeOrder(data : makeOrderData) {
  return function (dispatch : Dispatch<makeOrderAction>) {
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

export function openOrderModal() : actionOpenOrderModal {
  return { type: OPEN_ORDER_MODAL };
}
export function closeOrderModal() : actionCloseOrderModal{
  return { type: CLOSE_ORDER_MODAL };
}
