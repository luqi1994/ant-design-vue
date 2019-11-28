import Mock from "mockjs";

// 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
Mock.setup({
  timeout: "200 - 400"
});

const getUserInfo = [{ a: 1 }, { b: 2 }];

// Mock.mock( url, post/get , 返回的数据)
Mock.mock("/user/getUserInfo", "get", getUserInfo);
