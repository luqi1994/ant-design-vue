import Mock from "mockjs";

const getApi = () => {
  return {
    code: 200,
    msg: "请求成功",
    data: {
      data: [
        {
          title: "百度开发平台",
          description: "语音图像人脸",
          icon: "bold",
          url: "https://ai.baidu.com/sdk"
        },
        {
          title: "聚合数据",
          description: "免费接口分类",
          icon: "api",
          url: "https://www.juhe.cn/docs"
        },
        {
          title: "网易云音乐",
          description: "随机歌曲输出",
          icon: "play-circle",
          url: "https://api.uomg.com/api/rand.music"
        }
      ]
    }
  };
};

const getUi = () => {
  return {
    code: 200,
    msg: "请求成功",
    data: {
      data: [
        {
          title: "Ant Design Vue",
          description: "Ant Design 的 Vue 实现，开发和服务于企业级后台产品...",
          icon: "ant-design",
          url: "https://www.antdv.com/docs/vue/introduce-cn/"
        },
        {
          title: "ANTD PRO VUE",
          description: "开箱即用的中台前端/设计解决方案...",
          icon: "ant-design",
          url: "https://pro.loacg.com/"
        },
        {
          title: "Ant Design",
          description:
            "antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品...",
          icon: "ant-design",
          url: "https://ant.design/index-cn"
        },
        {
          title: "ANT DESIGN PRO",
          description: "开箱即用的中台前端/设计解决方案...",
          icon: "ant-design",
          url: "https://pro.ant.design/index-cn"
        },
        {
          title: "Ant Design Mobile",
          description: "一个基于 Preact / React / React Native 的 UI 组件库...",
          icon: "ant-design",
          url: "https://mobile.ant.design/index-cn"
        }
      ]
    }
  };
};

Mock.mock("/api/user/getApi", "get", getApi);
Mock.mock("/api/user/getUi", "get", getUi);
