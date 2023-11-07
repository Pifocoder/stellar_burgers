import {
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL,
} from "../actionTypes";
import { API_URL_ORDERS } from "../../constants";
import checkResponse from "../../utils/response";
export function makeOrder(data) {
  return function (dispatch) {
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

export function openOrderModal() {
  return { type: OPEN_ORDER_MODAL };
}
export function closeOrderModal() {
  return { type: CLOSE_ORDER_MODAL };
}
