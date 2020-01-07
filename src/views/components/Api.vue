<template>
  <div>
    <div style="textAlign:center;padding:50px" v-if="loading">
      <a-spin />
    </div>
    <a-row :gutter="12" v-if="!loading" type="flex" align="top">
      <a-col
        :sm="12"
        :md="8"
        :lg="6"
        :xl="4"
        v-for="(item, index) of data"
        :key="index"
        style="marginBottom: 12px"
      >
        <a-card
          hoverable
          style="width: 100%"
          :bodyStyle="{ padding: '16px', textAlign: 'center' }"
        >
          <template class="ant-card-actions" slot="actions">
            <a-tooltip placement="bottom">
              <template slot="title">
                <span>跳转</span>
              </template>
              <a :href="item.url" target="_blank">
                <a-icon type="right-circle" />
              </a>
            </a-tooltip>
            <a-icon class="star" type="heart" />
            <a-icon type="ellipsis" />
          </template>
          <div style="textAlign:center;marginBottom:8px;fontSize:32px">
            <a-icon :type="item.icon" />
          </div>
          <a-card-meta :title="item.title" :description="item.description">
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { getApi } from "@/services/all";
export default {
  name: "Api",
  data() {
    return {
      loading: true,
      data: []
    };
  },
  mounted() {
    getApi().then(res => {
      if (res) {
        this.data = res.data;
        this.loading = false;
      }
    });
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.star:hover {
  color: #fa8c16;
}
.ant-card-actions > li > span > .anticon {
  line-height: 0;
  font-size: inherit;
}
</style>
