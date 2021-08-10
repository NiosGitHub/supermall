<template>
  <div class="wallet">
    <div class="left">
      <p class="num">0.00<span>元</span></p>
      <p class="mes">我的余额</p>
    </div>
    <div class="center">
      <p class="num">0<span>个</span></p>
      <p class="mes">我的优惠</p>
    </div>
    <div class="right">
      <p class="num">0<span>分</span></p>
      <p class="mes">我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProflieWallet",
};
</script>

<style scoped>
.wallet{
    height: 100px;
    background-color: #fff;
    display: flex;
    border-bottom: 15px solid rgba(110, 110, 110, 0.1);
    text-align: center;
    align-items: center;
}

span{
    font-size: 14px;
    color: black;
    font-weight: normal;
}

p{
    margin: 10px;
}

.num{
    font-weight: 700;
    font-size: 20px;
    color: rgb(255, 115, 0);
}

.mes{
    font-size: 14px;
}

.left{
    flex: 1;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.center{
    flex: 1;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.right{
    flex: 1;
}
</style>