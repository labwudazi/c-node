<template>
  <div id="app">
    这是我新添加的
    <Header />
    <div class="main">
      <router-view />

      <div class="reight">
        <Panel width="300" v-if="!$route.path.includes('login')">
          <template #header>
            <span v-if="getUserInfo" class="login-title"> 个人信息 </span>
            <span v-else class="login-title"> 网站信息 </span>
          </template>
          <template #content>
            <div v-if="getUserInfo">
              <img class="login-url" :src="getUserInfo.avatar_url" alt="" />
              <span>{{ getUserInfo.loginname }}</span>
            </div>
            <div class="contents" v-else>
              <p>国家一个</p>
              <router-link class="login-btn" to="/login">登陆</router-link>
            </div>
          </template>
        </Panel>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Panel from "./layout/Panel.vue";
export default {
  name: "app",
  components: {
    Header,
    Panel,
  },
  created() {
    const token = Boolean(localStorage.getItem("token"));
    this.getUser(token)
    console.log(token);
  },
  watch: {
    token: {
      handler(newValue) {
        this.getUser(newValue)
      },
      immediate: true,
    },
  },
  computed: {
    getUserInfo() {
      return this.$store.state.token;
    },
  },
  methods: {
    getUser(value) {
      if (value) {
        this.$axios
          .post("/accesstoken", {
            accesstoken: "06d4472b-b879-402c-abcb-e8cd7ccb31bd",
          })
          .then((res) => {
            // this.$router.push("/");
            const userInfo = res;
            delete userInfo.success;
            this.$store.commit("getToken", userInfo);
          });
      }
    },
  },
};
</script>

<style lang="less">
.main {
  display: flex;
  padding: 20px 100px;
  width: 100%;
  background-color: #e1e1e1;
  .reight {
    margin-left: 20px;
    border-radius: 4px;
    width: 25%;
    .login-title {
      height: 50px;
      line-height: 50px;
      font-size: 18px;
    }
    .content {
      padding-bottom: 20px;
    }
    .contents p {
      margin: 0 0 10px;
    }
    .login-btn {
      padding: 5px 10px;
      background-color: yellowgreen;
      border-radius: 4px;
    }
  }
}
</style>
