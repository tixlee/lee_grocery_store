export default {
    cartTotal(state) {
      return state.cart.map(p=>p.product.price*p.quantity).reduce((prev,curr)=>prev+curr,0)
    }
}