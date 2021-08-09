<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <template #center> 我的档案 </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Profile",
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