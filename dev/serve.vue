<script lang="ts">
import dashboardItem from "@/lib-components/dashboard/dashboard-item.vue";
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { MyFirstVueLibrarySample } from '@/entry.esm';

export default defineComponent({
  components: { dashboardItem },
  name: "ServeDev",
  // components: {
  //  MyFirstVueLibrarySample,
  // }
});
</script>
<style scoped>
.flexDisplay {
  display: flex;
  flex-direction: row;
}
.flexDisplay > div {
  margin: 5px;
}
</style>
<template>
  <div id="app">
    <div class="flexDisplay">
      <dashboard-item
        bgColor="green"
        :itemSize="{ x: 2, y: 1 }"
        :itemType="1"
        :widgetData="{ url: 'https://google.com', text: 'Google' }"
        :hasFooter="false"
        :hasHeader="false"
      />
      <dashboard-item
        :itemSize="{ x: 2, y: 1 }"
        :itemType="1"
        :widgetData="{
          url: 'https://microsoft.com',
          text: 'Microsoft',
          color: 'red',
        }"
        :hasFooter="false"
        :hasHeader="false"
      />
    </div>
  </div>
</template>
