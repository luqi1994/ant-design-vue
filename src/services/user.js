import service from "../utils/axios";

export function getToken(params) {
  return service.post("/api/user/getToken", params);
}
export function getUserInfo(params) {
  return service.post("/api/user/getUserInfo", params);
}
