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
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>User</span></span>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
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
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '18px',
          paddingTop: '64px',
          height: '100%'
        }"
      >
        <div style="background: #fff;padding: 18px">
          Content
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: "BasicLayout",
  data() {
    return {
      collapsed: false,
      headerWidth: "100%"
    };
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
  padding: 0 12px 0 0;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  -webkit-transition: width 0.2s;
  transition: width 0.2s;
}
.title {
  font-size: 17px;
  display: inline-block;
  width: 142px;
  text-align: center;
}
</style>
