<template>
  <swiper>
    <template #default>
      <swiper-item v-for="item in banners" :key="item">
        <template #default>
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imageLoad" />
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
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  components: {
    SwiperItem,
    Swiper,
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style>
</style>