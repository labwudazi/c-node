<template>
  <div class="home">
    <Panel width="900">
      <template #header>
        <div class="nav">
          <router-link to="/">首页</router-link>
          <router-link to="/good">精华</router-link>
          <router-link to="/share">分享</router-link>
          <router-link to="/ask">问答</router-link>
          <router-link to="/job">招聘</router-link>
          <router-link to="/dev">客户端测试</router-link>
        </div>
      </template>
      <template #content>
        <div v-if="posts.length">
          <div class="posts-item" v-for="post in posts" :key="post.id">
            <router-link :to="`/user/${post.author.loginname}`">
              <img
                class="author"
                :title="post.author.loginname"
                :src="post.author.avatar_url"
                alt=""
              />
            </router-link>
            <span class="count"
              ><span class="reply-count">{{ post.reply_count }}</span
              >/<span class="visit-count">{{ post.visit_count }}</span></span
            >
            <span
              v-if="!tab || post.top || post.good"
              :class="post.top || post.good ? 'active tab' : 'tab'"
              >{{ post | getPostchineseTab }}</span
            >
            <router-link
              class="title"
              :to="{ name: 'topic', params: { topicId: post.id } }"
              >{{ post.title }}</router-link
            >
          </div>
          <el-pagination
            :current-page.sync="page"
            :page-size="40"
            background
            layout="prev, pager, next"
            :total="1000"
          >
          </el-pagination>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../layout/Panel";
export default {
  name: "Home",
  components: { Panel },
  data() {
    return {
      posts: [],
      page: 1,
    };
  },
  // 通过监听动态路由参数， 获取对用的分类数据
  watch: {
    tab: {
      async handler(newValue) {
        // const tab = newValue || "all"
        // const res = await this.$axios.get(`/topics?page=1&limit=40&tab=${tab}`);
        const queryTab = newValue ? `&tab=${newValue}` : "";
        const res = await this.$axios.get(
          `/topics?page=${this.page}&limit=40${queryTab}`
        );
        this.posts = res.data;
      },
      immediate: true,
    },
    page: {
      async handler(page) {
        const res = await this.$axios.get(
          `/topics?page=${page}&limit=40${this.$route.params}`
        );
        this.posts = res.data;
      },
      immediate: true,
    },
  },
  computed: {
    tab() {
      return this.$route.params.tab;
    },
  },
  // methods: {
  //   getPost() {

  //   }
  // },
};
</script>
<style lang="less">
.nav {
  height: 50px;
  line-height: 50px;
  background-color: #00b3d4;
  a {
    display: inline-block;
    margin: 0 15px;
    height: 30px;
    line-height: 30px;
    padding: 0 4px;
    color: greenyellow;
    border-radius: 5px;
  }
  a.router-link-exact-active {
    color: #fff;
    background-color: red;
  }
}
.posts-item {
  border-top: 1px solid rgb(241, 238, 238);
  padding: 4px 10px;
  display: flex;
  align-items: center;
  .author {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    vertical-align: middle;
    margin: 5px 0;
  }
  // 超出部分用省略号代替
  .title {
    width: 65%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .count {
    display: block;
    width: 100px;
    text-align: center;
  }
  .tab {
    background-color: #ccc;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 12px;
    margin-right: 5px;
    color: white;
  }
  .active.tab {
    background-color: #00d447;
  }
}
</style>
