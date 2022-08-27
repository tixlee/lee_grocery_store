export default function ({ store }, inject) {
  store.commit("cart/LoadCart");

  inject("formatMoney", (money) => {
    return new Intl.NumberFormat("en-US", {
      currency: "MYR",
      style: "currency",
    }).format(money);
  });
}
