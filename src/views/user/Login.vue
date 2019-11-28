<template>
  <div class="home">{{ data }}</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      data: ""
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    ...mapActions(["getUserInfoAction"]),
    getUserInfo() {
      const { getUserInfoAction } = this;
      getUserInfoAction().then(res => {
        this.data = res;
      });
    }
  }
};
</script>
