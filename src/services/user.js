import service from "../utils/axios";

export function getUserInfo() {
  return service.get("/user/getUserInfo");
}
