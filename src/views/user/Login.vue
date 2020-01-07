<template>
  <div class="login">
    <div class="head">
      <div class="title">Vue-Admin</div>
      <div class="content">一套简洁的 vue 后台管理系统前端方案</div>
    </div>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'username',
            {
              rules: [{ required: true, message: '请输入账号' }]
            }
          ]"
          placeholder="请输入账号：admin"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [{ required: true, message: '请输入密码' }]
            }
          ]"
          type="password"
          placeholder="请输入密码：admin"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import md5 from "md5";

export default {
  name: "Login",
  components: {},
  data() {
    return {};
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "login" });
  },
  mounted() {},
  methods: {
    ...mapActions(["getToken"]),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          values.password = md5(values.password);
          const { getToken } = this;
          getToken(values).then(res => {
            if (res) {
              localStorage.setItem("token", res.token);
              this.$router.push({ path: "/home" });
            }
          });
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.login {
  width: 100%;
  padding-top: 150px;
}

.login-form {
  width: 380px;
  min-width: 270px;
  padding: 0 10px;
  margin: 0 auto;
}

.login-form-button {
  width: 100%;
}

.head {
  text-align: center;
  color: rgba(0, 0, 0, 0.5);

  .title {
    font-size: 32px;
    font-weight: bold;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    color: rgba(0, 0, 0, 0.9);
  }

  .content {
    margin: 10px 0 24px;
  }
}
</style>
