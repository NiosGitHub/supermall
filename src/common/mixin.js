
import { debounce } from "common/utils";

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