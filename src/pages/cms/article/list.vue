<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getGoodsList } from '@/api';
export default Vue.extend({
  data: () => ({
    GoodsList: [],
  }),
  async created() {
    const res = await getGoodsList();
    console.log(res);
  },
});
</script>

<style>
</style>