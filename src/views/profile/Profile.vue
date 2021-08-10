<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <template #center> 我的档案 </template>
    </nav-bar>
    <profile-user/>
    <profile-wallet/>
    <profile-list/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import ProfileUser from "./childComps/ProfileUser"
import ProfileWallet from './childComps/ProfileWallet';
import ProfileList from './childComps/ProfileList';

export default {
  name: "Profile",
  components: {
    NavBar,
    ProfileUser,
    ProfileWallet,
    ProfileList
  },
};
</script>

<style>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>