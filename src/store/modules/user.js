import { getUserInfo } from "../../services/user";

const user = {
  state: {
    userInfo: {}
  },

  mutations: {
    SET_INFO: (state, info) => {
      state.userInfo = info;
    }
  },

  actions: {
    // 用户信息
    getUserInfoAction({ commit }, payload) {
      return getUserInfo()
        .then(res => {
          commit("SET_INFO", payload);
          return res;
        })
        .catch(err => {
          this.$message.error(err);
        });
    }
  }
};

export default user;
