<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template #center> 购物车({{ cartLength }}) </template>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar class="bottom" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import CartList from "./childComps/CartList";

import CartBottomBar from "./childComps/CartBottomBar";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    // mapGetters，直接将vuex里面getters的方法转换为计算属性使用
    // 语法1
    ...mapGetters(["cartLength"]),
    /*
      语法2(写成一个对象，调用自己命名的名字即可)
    ...mapGetters({
      length:'cartLength',
      list:'cartList'
    })
    */
  },
};
</script>

<style scoped>
  .cart {
    position: relative;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>