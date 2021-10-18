<template>
  <page-layout :avatar="currUser.avatar">
    <div slot="headerContent">
      <div class="title">{{ welcome.timeFix[lang] }}，{{ currUser.name }}，{{ welcome.message }}</div>
    </div>
    <template>
      <a-row style="margin: 0 -12px">
        <a-col style="padding: 0 12px" :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card class="project-list" :loading="loading" style="margin-bottom: 24px" :bordered="false" title="项目" :body-style="{ padding: 0 }">
            <a slot="extra">{{ $t('all') }}</a>
            <div>
              <a-card-grid :key="i" v-for="(item, i) in projects">
                <a-card :bordered="false" :body-style="{ padding: 0 }">
                  <a-card-meta :description="item.desc">
                    <div slot="title" class="card-title">
                      <a-avatar size="small" :src="item.logo" />
                      <span>Alipay</span>
                    </div>
                  </a-card-meta>
                  <div class="project-item">
                    <a class="group" href="/#/">科学搬砖组</a>
                    <span class="datetime">9小时前</span>
                  </div>
                </a-card>
              </a-card-grid>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </template>
  </page-layout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'WorkPlace',
  components: { PageLayout },
  data() {
    return {
      projects: [],
      loading: false,
      activities: [],
      teams: [],
      welcome: {
        timeFix: '',
        message: '欢迎回来',
      },
      user: {
        name: '不爱喝橙子汁',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
        address: '沈阳市',
        position: { CN: '产品分析师 | 蚂蚁金服-计算服务事业群-IOS平台部', HK: '產品分析師' },
      },
    };
  },
  computed: {
    ...mapState('account', { currUser: 'user' }),
    ...mapState('setting', ['lang']),
  },
  methods: {
    ...mapMutations('account', ['setUser']),
  },
  created() {
    // {,"address":"天水市","position":{"CN":"产品分析师 | 蚂蚁金服-计算服务事业群-IOS平台部","HK":"產品分析師 |}}
    this.setUser({
      name: '不爱喝橙子汁',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
      address: '沈阳市',
      position: { CN: '产品分析师 | 蚂蚁金服-计算服务事业群-IOS平台部', HK: '產品分析師' },
    });
  },
};
</script>

<style lang="less">
@import 'index';
</style>
