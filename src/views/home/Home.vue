<template>
  <a-row :gutter="16" class="container">
    <a-col :md="8" :lg="6">
      <a-card :title="name" :bordered="false" :loading="loading" class="left">
        <div style="textAlign:center;margin-bottom:1em">
          <a-avatar shape="square" :size="64" icon="user" />
        </div>
        <p>
          <a-icon type="like" theme="twoTone" style="margin-right:8px" />
          {{ slogan }}
        </p>
        <p>
          <a-icon type="tool" theme="twoTone" style="margin-right:8px" />
          {{ post }}
        </p>
        <p>
          <a-icon type="bank" theme="twoTone" style="margin-right:8px" />
          {{ company }}
        </p>
        <p>
          <a-icon type="environment" theme="twoTone" style="margin-right:8px" />
          {{ ad }}
        </p>
        <p>
          <a-icon type="mail" theme="twoTone" style="margin-right:8px" />
          {{ email }}
        </p>
        <div style="display:flex">
          <a-icon type="crown" theme="twoTone" style="margin-right:10px" />
          <div>
            <a-tag class="tag" v-for="(i, index) of tag" :key="index">
              {{ i }}
            </a-tag>
          </div>
        </div>
      </a-card>
    </a-col>
    <a-col :md="16" :lg="18">
      <a-card :bordered="false" :bodyStyle="{ padding: '12px 20px 24px' }">
        <a-tabs defaultActiveKey="1" @change="handleActiveKey">
          <a-tab-pane tab="文章" key="1">
            <template v-if="activeKey === '1'">
              文章
            </template>
          </a-tab-pane>
          <a-tab-pane tab="框架" key="2" forceRender>
            <Ui v-if="activeKey === '2'" />
          </a-tab-pane>
          <a-tab-pane tab="API数据" key="3">
            <Api v-if="activeKey === '3'" />
          </a-tab-pane>
          <a-tab-pane tab="插件" key="4">
            <template v-if="activeKey === '4'">插件</template>
          </a-tab-pane>
          <a-tab-pane tab="素材" key="5">
            <template v-if="activeKey === '5'">素材</template>
          </a-tab-pane>
          <a-tab-pane tab="休闲" key="6">
            <template v-if="activeKey === '6'">休闲</template>
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import { mapState } from "vuex";
import Api from "../components/Api";
import Ui from "../components/Ui";

export default {
  name: "Home",
  components: { Api, Ui },
  data() {
    return {
      activeKey: "1",
      loading: true,
      name: "--",
      slogan: "",
      post: "",
      company: "",
      ad: "",
      email: "",
      tag: ""
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    handleActiveKey(key) {
      this.activeKey = key;
    }
  },
  mounted() {
    console.log(this.user.userInfo.info);
    const info = this.user.userInfo.info;
    if (info) {
      this.loading = false;
      this.name = info.name;
      this.slogan = info.slogan;
      this.post = info.post;
      this.company = info.company;
      this.ad = info.ad;
      this.email = info.email;
      this.tag = info.tag;
    }
  }
};
</script>

<style lang="less" scoped>
.left {
  p {
    margin-bottom: 12px;
  }
  .tag {
    margin-bottom: 10px;
  }
}
</style>
