import service from "../utils/axios";

export function getApi() {
  return service.get("/api/user/getApi");
}
export function getUi() {
  return service.get("/api/user/getUi");
}
