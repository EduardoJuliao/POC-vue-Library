<template>
  <div class="content-container" :style="linkCss">
    <a :href="widgetData.url">
      {{ widgetData.text }}
      <font-awesome-icon icon="arrow-up-right-from-square" />
      </a>
      
  </div>
</template>
<script>
export default {
  props: {
    widgetData: Object,
  },
  computed: {
    linkCss() {
      console.log(this.widgetData.color);
      return {
        "--link-color": this.widgetData.color,
      };
    },
  },
};
</script>
<style scoped>
a {
  color: var(--link-color);
}
a:hover {
  cursor: pointer;
}
a:visited {
   color: var(--link-color);
}
.content-container {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}
</style>