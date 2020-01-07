import Mock from "mockjs";

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
    info: {
      name: "陆柒",
      slogan: "We don't make code, we're just IT movers",
      post: "前端搬运工",
      company: "某某科技-某某软件部-某某摸鱼组",
      ad: "中国 CHINA NO.1",
      email: "123321@123.com",
      tag: [
        "180dm².180cm.180mm",
        "只吃好吃吃美食家",
        "多届熬夜冠军",
        "<就一人参赛技术杯>总冠军",
        "喊666小能手",
        "..."
      ]
    },
    menu: [
      {
        title: "首页",
        icon: "home",
        path: "/home",
        redirect: "",
        name: "Home",
        component: "Home",
        hidden: 0
      },
      {
        title: "列表",
        icon: "form",
        path: "/list",
        redirect: "/list/table",
        name: "List",
        component: "List",
        hidden: 0,
        children: [
          {
            title: "登录页",
            icon: "",
            path: "/list/table",
            redirect: "",
            name: "ListTable",
            component: "ListTable",
            hidden: 0
          }
        ]
      },
      {
        title: "",
        icon: "",
        path: "/*",
        redirect: "",
        name: "Empty",
        component: "Empty",
        hidden: 1
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
