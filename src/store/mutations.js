import { ADD_TO_CART, ADD_COUNTER } from "./mutations-types"

export default {
    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    [ADD_TO_CART](state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    },
    deleteProduct(state) {
        state.cartList = state.cartList.filter(item => !item.checked);
      }
}