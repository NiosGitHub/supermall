
import { debounce } from "common/utils";
import BackTop from "components/content/backTop/BackTop.vue";

export const itemListenerMixin = {
    data() {
        return {
            itemIamgeListener: null,
            newRefresh: null
        }
    },
    mounted() {
        this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
        this.itemIamgeListener = () => {
            this.newRefresh();
        };
        this.$bus.$on("itemImageLoad", this.itemIamgeListener);
    },
}

export const backTopMixin={
    components:{
        BackTop,
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0);
          },
    },
}