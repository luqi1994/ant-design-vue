<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="80"
      v-model="collapsed"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <div class="logo" :style="{ padding: collapsed ? '0 12px' : 0 }">
        <a-icon type="apple" theme="filled" />
        <span
          class="title"
          :style="{
            opacity: collapsed ? 0 : 1,
            webkitTransition: collapsed
              ? 'none'
              : 'opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
            transition: collapsed
              ? 'none'
              : 'opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }"
          >Ant-Design-Vue
        </span>
      </div>
      <!-- 左侧导航栏 -->
      <a-menu
        theme="dark"
        mode="inline"
        :defaultSelectedKeys="fullPath"
        :openKeys="openKeys"
        @openChange="handleOpenChange"
      >
        <template v-for="item of menu">
          <a-menu-item
            :key="item.path"
            v-if="
              (!item.children || item.children.length === 0) && !item.hidden
            "
          >
            <router-link :to="{ path: item.path }">
              <a-icon :type="item.icon" v-if="item.icon" />
              <span>{{ item.title }}</span>
            </router-link>
          </a-menu-item>
        </template>
        <template v-for="item of menu">
          <a-sub-menu
            :key="item.path"
            v-if="item.children && item.children.length !== 0 && !item.hidden"
          >
            <span slot="title">
              <a-icon :type="item.icon" v-if="item.icon" />
              <span>{{ item.title }}</span>
            </span>
            <a-menu-item v-for="it of item.children" :key="it.path">
              <router-link :to="{ path: it.path }">
                {{ it.title }}
              </router-link>
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout
      :style="{ paddingLeft: collapsed ? '80px' : '200px', minHeight: '100vh' }"
    >
      <a-layout-header
        class="header"
        :style="{
          width: collapsed ? 'calc(100% - 80px)' : 'calc(100% - 200px)'
        }"
      >
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-icon class="logout" type="logout" @click="handleLogout" />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '18px',
          paddingTop: '64px',
          height: '100%'
        }"
      >
        <div style="background: #fff;padding: 18px">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "BasicLayout",
  components: {},
  data() {
    return {
      collapsed: false,
      headerWidth: "100%",
      menu: [1, 2],
      fullPath: [this.$route.fullPath],
      openKeys: this.$route.matched.map(item => item.path)
    };
  },
  computed: {
    ...mapState(["user"])
  },
  mounted() {
    this.getMenu();
    console.log(this.$route);
  },
  methods: {
    ...mapActions(["logout"]),
    getMenu() {
      const { menu } = this.user;
      this.menu = menu;
    },
    handleOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      this.openKeys = latestOpenKey ? [latestOpenKey] : [];
    },
    handleLogout() {
      const { logout } = this;
      logout().then(res => {
        console.log(res);
        this.$router.push({ path: "/user/login" });
      });
    }
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  color: #fff;
  line-height: 32px;
  font-size: 24px;
  height: 32px;
  /*background: rgba(255, 255, 255, 0.2);*/
  margin: 16px;
}
</style>
<style scoped>
.header {
  background: #fff;
  padding: 0 18px 0 0;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  -webkit-transition: width 0.2s;
  transition: width 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 17px;
  display: inline-block;
  width: 142px;
  text-align: center;
}
.logout {
  line-height: 64px;
  padding-left: 12px;
  cursor: pointer;
}
.logout:hover {
  color: #1890ff;
}
</style>
