<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :paramInfo="paramInfo" ref="params" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-list :goods="recommends" ref="recommends" />
    </scroll>
    <detail-bottom-bar @addCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <toast :message="message" :isShow="isShow"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
import Toast from "components/common/toast/Toast"

import { itemListenerMixin, backTopMixin } from "common/mixin.js";
import { debounce } from "common/utils";

import { ADD_CART } from "store/mutations-types";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailCommentInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    Toast
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      isShow:false,
      message:'',
    };
  },
  created() {
    // 1.获取iid
    this.iid = this.$route.params.iid;
    // 2.请求详情数据
    this.getDetail(this.iid);
    // 3.请求推荐数据
    this.getRecommend();
    // 4.给GetThemeTopY赋值(对this.themeTopYs赋值操作进行防抖)
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
    }, 200);
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemIamgeListener);
  },
  methods: {
    getDetail(iid) {
      getDetail(iid).then((res) => {
        const data = res.result;

        // 1.获取顶部的轮播图片数据
        this.topImages = data.itemInfo.topImages;

        // 2.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        // 3.获取店铺信息
        this.shop = new Shop(data.shopInfo);

        // 4.商品的详情数据
        this.detailInfo = data.detailInfo;

        // 5.获取参数信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );

        //6.获取评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    getRecommend() {
      getRecommend().then((res) => {
        this.recommends = res.data.list;
      });
    },
    imageLoad() {
      this.newRefresh();
    },
    titleClick(index) {
      this.getThemeTopY();
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentScroll(position) {
      // 1
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
            (i === length - 1 && positionY >= this.themeTopYs[i]))
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      // 2.判断backtop是否显示
      this.isShowBackTop = -position.y > 1000;
    },
    addToCart() {
      // 1.获取商品购物车需要展示信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 2.将商品加入到购物车(mapActions,Actions可以返回一个Promise)
      this.$store.dispatch(ADD_CART, product).then(res=>{
        this.isShow=true,
        this.message=res,

        setTimeout(() => {
          this.isShow=false
          this.message=''
        }, 2000);
      });
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.deatil-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px - 50px);
  overflow: hidden;
}
</style>