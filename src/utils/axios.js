import axios from "axios";
import { message } from "ant-design-vue";

const service = axios.create({
  timeout: 6000 // 请求超时时间
});

// 错误
const err = error => {
  message.error("服务器错误，请重试！");
  console.log(error);
  // return Promise.reject(error);
};

// 请求拦截
service.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = {
      ...config.headers,
      authorization: token
    };
  }
  return config;
}, err);

// 响应拦截
service.interceptors.response.use(res => {
  if (res.data) {
    if (res.data.code === 200) {
      return res.data.data;
    } else if (res.data.code === 500) {
      message.error(res.data.msg);
    } else {
      message.error("获取数据失败，请重试");
      // Promise.reject(res.data.msg);
    }
  }
}, err);

export default service;
