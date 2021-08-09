import { ADD_CART,ADD_TO_CART,ADD_COUNTER } from "./mutations-types"

export default{
    [ADD_CART](context, payload) {
       return new Promise((resolve,reject)=>{
            // payload中新添加的商品
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

        // 2.判断oldProduct
        if (oldProduct) {
            // oldProduct.count += 1
            context.commit(ADD_COUNTER,oldProduct)
            resolve('再次添加')
        } else {
            payload.count = 1
            // context.state.cartList.push(payload)
            context.commit(ADD_TO_CART,payload)
            resolve('添加成功')
        }
       })
    }
}