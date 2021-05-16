<template>
  <div v-if="user">
    <Panel width="850">
      <template #header>
        <router-link to="/">主页</router-link>
        <div>
          <img :src="user.avatar_url" alt="" />
          <div>发布于 {{ user.create_at }}</div>
        </div>
      </template>
    </Panel>
    <Panel>
      <template #header>
        <span>最近创建的主题</span>
        <div>
          <div v-for="item in user.recent_topics.slice(0, 4)" :key="item.id">
            <router-link :to="`/user/${item.author.loginname}`">
              <img width="30px" :src="item.author.avatar_url" alt="" />
            </router-link>
            <router-link :to="`/topic/${item.id}`">{{
              item.title
            }}</router-link>
          </div>
        </div>
      </template>
    </Panel>
    <Panel>
      <template #header>
        <span>最近参与的主题</span>
        <div>
          <div v-for="item in user.recent_replies" :key="item.id">
            <router-link :to="`/user/${item.author.loginname}`">
              <img width="30px" :src="item.author.avatar_url" alt="" />
            </router-link>
            <router-link :to="`/topic/${item.id}`">{{
              item.title
            }}</router-link>
          </div>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../layout/Panel.vue";
export default {
  components: { Panel },
  data() {
    return {
      user: null,
    };
  },
  watch: {
    "$route.params": {
      async handler() {
        const { loginname } = this.$route.params;
        const res = await this.$axios.get(`/user/${loginname}`);
        this.user = res.data;
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>