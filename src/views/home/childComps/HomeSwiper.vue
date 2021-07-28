<template>
  <swiper>
    <template #default>
      <swiper-item v-for="item in banners" :key="item">
        <template #default>
          <a :href="item.link">
            <img :src="item.image" alt="" />
          </a>
        </template>
      </swiper-item>
    </template>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props:{
      banners:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components: {
    SwiperItem,
    Swiper,
  },
};
</script>

<style>
    
</style>