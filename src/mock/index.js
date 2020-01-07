const Mock = require("mockjs");
require("./user");
require("./api");

Mock.setup({
  timeout: 500 // setter delay time
});
