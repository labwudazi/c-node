<template>
  <div :style="{ width: fromatWidth }" class="panel">
    <div class="header">
      <slot name="header" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
// 这是一个布局组件
export default {
  props: {
    width: {
      type: [String, Number],
      default: "100%",
    },
  },
  computed: {
    fromatWidth() {
      const { width } = this;
      return typeof width === "Number" || Number(width) ? width + "px" : width;
    },
  },
};
</script>

<style lang="less">
.panel { 
  width:100%;
  margin-top:10px;
  border-radius: 4px;
  .header {
    background-color: #00b3d4;
    border-radius: 5px 5px 0 0;
    padding: 0 10px;
  }
  .content {
    background-color: #fff;
    border-radius: 0 0 5px 5px;
    padding: 0 10px;
  }
}
</style>