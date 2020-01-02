import { getToken, getUserInfo } from "../../services/user";

const user = {
  state: {
    token: "",
    userInfo: {},
    menu: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_INFO: (state, info) => {
      state.userInfo = info;
    },
    SET_MENU: (state, menu) => {
      state.menu = menu;
    }
  },

  actions: {
    async getToken({ commit }, payload) {
      return getToken(payload).then(res => {
        if (res) {
          commit("SET_TOKEN", res);
          return res;
        }
      });
    },
    // 用户信息
    async getUserInfoAction({ commit }, payload) {
      return getUserInfo(payload).then(res => {
        if (res) {
          commit("SET_INFO", res);
          commit("SET_MENU", res.menu);
          return res;
        }
      });
    },
    // 退出
    async logout({ commit }) {
      commit("SET_TOKEN", "");
      localStorage.removeItem("token");
    }
  }
};

export default user;
