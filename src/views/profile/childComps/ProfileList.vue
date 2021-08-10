<template>
  <div class="list">
    <div class="top">我的消息</div>
    <div class="center">积分商城</div>
    <div class="bottom">会员卡</div>
  </div>
</template>

<script>
export default {
  name: "ProflieList",
};
</script>

<style scoped>
.list {
  height: 150px;
  background-color: #fff;
  border-bottom: 15px solid rgba(110, 110, 110, 0.1);
}

.top,.center,.bottom{
    height: 50px;
    line-height: 50px;
    margin-left: 30px;
    font-weight: 700;
    color: black;
}
.top,.center{
    border-bottom: 1px solid rgba(216, 216, 216, 0.788);
}

</style>