<template>
  <div class="item" :style="itemSizeCss">
    <dashboard-item-header v-if="hasHeader" />
    <dashboard-item-content-link v-if="isLink()" :widgetData="widgetData" />
    <div class="footer" v-if="hasFooter"></div>
  </div>
</template>
<script>
import { DasboardItemSizeDefaults } from "./defaults/dashboard-item-size.defaults";
import { DashboardItemContentType } from "./enums/dashboard-item.type.enum";

export default {
  props: {
    bgColor: { type: String, required: false, default: 'blue' },
    title: { type: String, required: false },
    itemSize: { type: Object, required: false },
    itemType: { type: Number, required: false },
    hasHeader: { Type: Boolean, required: false, default: true },
    hasFooter: { Type: Boolean, required: false, default: false },
    widgetData: { Type: Object, required: false, default: {} },
  },
  methods: {
    isLink() {
      return this.type == DashboardItemContentType.Link;
    },
  },
  computed: {
    itemSizeCss() {
      return {
        "--item-width": 100 * this.size.x + "px",
        "--item-height": 100 * this.size.y + "px",
        "--background-color": this.backgroundColor,
      };
    },
  },
  data() {
    return {
      backgroundColor: null,
      size: null,
      type: null,
    };
  },
  beforeMount: function () {
    this.backgroundColor = this.bgColor ?? "blue";
    this.size = this.itemSize ?? {};
    Object.keys(DasboardItemSizeDefaults.instance).forEach((key) => {
      if (!this.size.hasOwnProperty(key))
        this.size[key] = DasboardItemSizeDefaults.instance[key];
    });
    this.type = this.itemType;
  },
};
</script>
<style scoped>
.item {
  width: var(--item-width);
  height: var(--item-height);
  background-color: var(--background-color);
  font-family: consolas;
}
</style>
