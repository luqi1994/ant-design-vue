<template>
  <div class="con">
    <p class="first">404</p>
    <p>:)</p>
    <p>十年磨一剑 - 为Admin后台开发的简洁前端框架</p>
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
  </div>
</template>

<script>
export default {
  name: "FourOFour"
};
</script>

<style scoped lang="less">
.con {
  padding: 120px 0;
  text-align: center;
  .first {
    font-size: 48px;
  }
  p:first-child {
    margin: 0;
  }
  p {
    margin-bottom: 15px;
  }
}
</style>
