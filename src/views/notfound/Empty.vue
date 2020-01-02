<template>
  <a-empty
    style="padding: 110px 0 170px"
    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
  >
    <span slot="description"> 模块尚未开发 </span>
    <a-button
      size="small"
      type="primary"
      @click="
        () => {
          this.$router.push({ path: '/home' });
        }
      "
    >
      home
    </a-button>
  </a-empty>
</template>

<script>
export default {
  name: "Empty"
};
</script>

<style scoped></style>
