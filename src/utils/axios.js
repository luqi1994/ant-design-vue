import axios from "axios";

const service = axios.create({
  timeout: 6000 // 请求超时时间
});

// 错误
const err = error => {
  this.$message.error("服务器错误，请重试！");
  return Promise.reject(error);
};

// 请求拦截
service.interceptors.request.use(config => {
  return config;
}, err);

// 响应拦截
service.interceptors.response.use(res => {
  return res.data;
}, err);

export default service;

// export default function request(method, url, data) {
//   return new Promise((resolve, reject) => {
//     service({ method, url, data })
//       .then(res => {
//         resolve(res);
//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
// }
