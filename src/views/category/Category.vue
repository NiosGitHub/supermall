<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <template #center> 分类 </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Category",
  components: {
    NavBar,
  },
};
</script>

<style>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>