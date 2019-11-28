import Vue from "vue";
import VueRouter from "vue-router";
// import BasicLayout from "@/layout/BasicLayout";
import Login from "@/views/user/Login";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  routes
});

export default router;
