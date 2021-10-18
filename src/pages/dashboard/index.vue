<template>
  <page-layout :avatar="currUser.avatar">
    <div slot="headerContent">
      <div class="title">{{ welcome.timeFix[lang] }}，{{ currUser.name }}，{{ welcome.message[lang] }}</div>
      <div>{{ currUser.position[lang] }}</div>
    </div>
    <template slot="extra">
      <head-info class="split-right" :title="$t('project')" content="56" />
      <head-info class="split-right" :title="$t('ranking')" content="8/24" />
      <head-info class="split-right" :title="$t('visit')" content="2,223" />
    </template>
    <template>
      <a-row style="margin: 0 -12px">
        <a-col style="padding: 0 12px" :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card
            class="project-list"
            :loading="loading"
            style="margin-bottom: 24px"
            :bordered="false"
            :title="$t('progress')"
            :body-style="{ padding: 0 }"
          >
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
import { mapState } from 'vuex';

export default {
  name: 'WorkPlace',
  components: { PageLayout },
  data() {
    return {
      projects: [],
      loading: true,
      activities: [],
      teams: [],
      welcome: {
        timeFix: '',
        message: '',
      },
    };
  },
  computed: {
    ...mapState('account', { currUser: 'user' }),
    ...mapState('setting', ['lang']),
  },
};
</script>

<style lang="less">
@import 'index';
</style>
