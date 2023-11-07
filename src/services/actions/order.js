import { MAKE_ORDER, OPEN_ORDER_MODAL, CLOSE_ORDER_MODAL } from "../../constants"
export function makeOrder(id) {
    return {type : MAKE_ORDER, id : id}
}
export function openOrderModal() {
    return {type : OPEN_ORDER_MODAL}
}
export function closeOrderModal() {
    return {type : CLOSE_ORDER_MODAL}
}