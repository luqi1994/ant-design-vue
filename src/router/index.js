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
  },
  {
    path: "/404",
    component: () => import("@/views/notfound/404")
  }
];

const getRoutes = [
  {
    path: "/",
    name: "/",
    component: BasicLayout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home/Home")
      },
      {
        path: "/list",
        name: "List",
        redirect: "/list/table",
        component: BlankLayout,
        children: [
          {
            path: "/list/table",
            name: "Table",
            component: () => import("@/views/user/Login")
          }
        ]
      },
      {
        path: "/bbb",
        name: "Home",
        component: () => import("@/views/user/Login")
      },
      {
        path: "/*",
        component: () => import("@/views/notfound/Empty")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

const whiteList = ["Login"];

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (token) {
    if (to.path === "/user/login") {
      console.log(0);
      next({ path: "/" });
    } else {
      console.log(1);
      if (store.getters.menu.length === 0) {
        console.log(2);
        store
          .dispatch("getUserInfoAction", { token: token })
          .then(res => {
            console.log(res.menu);
            if (res) {
              router.addRoutes(getRoutes);
              next({ ...to, replace: true });
            }
          })
          .catch(err => {
            console.log(err);
            store.dispatch("logout");
            next({ path: "/user/login" });
            console.log(3);
          });
      } else {
        console.log(4);
        next();
      }
    }
  } else {
    console.log(to.name);
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next();
    } else {
      next({ path: "/user/login" });
    }
  }
});

export default router;
