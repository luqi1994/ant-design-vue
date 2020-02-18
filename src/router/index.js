import Vue from "vue";
import VueRouter from "vue-router";
import BasicLayout from "@/layout/BasicLayout";
import BlankLayout from "@/layout/BlankLayout";
import store from "@/store";
// import { message } from "ant-design-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user/login",
    name: "Login",
    component: () => import("@/views/user/Login")
  }
  // {
  //   path: "/404",
  //   component: () => import("@/views/notfound/404")
  // }
];

// 路由的依赖组件
const components = {
  BlankLayout: BlankLayout,
  Home: () => import("@/views/home/Home"),
  Empty: () => import("@/views/notfound/Empty"),
  ListTable: () => import("@/views/user/Login"),
  TestTabs: () => import("@/views/test/Tabs")
};

const router = new VueRouter({
  mode: "history",
  routes
});

const delMenu = m => {
  const c = m.map(item => {
    if (item.children && item.children.length !== 0) {
      return {
        path: item.path,
        name: item.name,
        redirect: item.redirect,
        component: components[item.component],
        children: delMenu(item.children)
      };
    } else {
      return {
        path: item.path,
        name: item.name,
        component: components[item.component]
      };
    }
  });
  return c;
};

const whiteList = ["Login"];

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (token) {
    if (to.path === "/user/login") {
      next({ path: "/home" });
    } else {
      if (store.getters.menu.length === 0) {
        store
          .dispatch("getUserInfoAction", { token: token })
          .then(res => {
            if (res) {
              const menu = [
                {
                  path: "/",
                  component: BasicLayout,
                  redirect: "/home",
                  children: delMenu(res.menu)
                }
              ];
              router.addRoutes(menu);
              next({ ...to, replace: true });
            }
          })
          .catch(err => {
            console.log(err);
            store.dispatch("logout");
            next({ path: "/user/login" });
          });
      } else {
        next();
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next();
    } else {
      next({ path: "/user/login" });
    }
  }
});

export default router;
