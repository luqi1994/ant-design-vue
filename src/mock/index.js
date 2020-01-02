import Mock from "mockjs";

// 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
Mock.setup({
  timeout: "200 - 400"
});

const getToken = {
  code: 200,
  msg: "请求成功",
  data: {
    token: "token"
  }
};
const getUserInfo = {
  code: 200,
  msg: "请求成功",
  data: {
    name: "admin",
    menu: [
      {
        name: "首页",
        path: "/home",
        icon: "home"
      },
      {
        name: "列表",
        path: "/list",
        icon: "table",
        children: [
          {
            path: "/list/table",
            name: "文章"
          },
          {
            path: "/list/table2",
            name: "文章2"
          }
        ]
      }
    ]
  }
};

// Mock.mock( url, post/get , 返回的数据)
Mock.mock("/api/user/getToken", "post", function(res) {
  if (res.body) {
    if (JSON.parse(res.body).username !== "admin") {
      return {
        code: 500,
        msg: "账号错误"
      };
    } else if (
      JSON.parse(res.body).password !== "21232f297a57a5a743894a0e4a801fc3"
    ) {
      return {
        code: 500,
        msg: "密码错误"
      };
    } else {
      return getToken;
    }
  }
});
Mock.mock("/api/user/getUserInfo", "post", function(res) {
  if (res.body) {
    if (JSON.parse(res.body).token !== "token") {
      return {
        code: 500,
        msg: "token失效或者错误"
      };
    } else {
      return getUserInfo;
    }
  }
});
