<template>
  <header>
    <router-link class="logo" to="/"
      ><img src="../assets/6487948cf6b3303c.jpg" alt=""
    /></router-link>
     <router-link class="info" to="/">首页</router-link>
      <router-link class="info" to="/">新手入门</router-link>
       <router-link class="info" to="/">Api</router-link>
    <router-link class="info" to="/">未读消息</router-link>
    <span @click="signout" class="signout">退出</span>
  </header>
</template>

<script>
export default {
  name: "Head",
  methods: {
    signout() {
      localStorage.clear()
      this.$store.state.token = null
    }
  },
};
</script>

<style lang="less">
header {
  width: 100%;
  height: 50px;
  background-color: #000;
  color: azure;
  display: flex;
  justify-content: start;
  align-items: center;
  padding:0 50px;
  a.logo {
    display: flex;
    align-items: center;
    width: 40px;
    margin-right: 30px;
  }
  a.logo img{
    width:40px;
  }
  a.info {
    color: azure;
    margin-right: 30px;
  }
  span.signout {
    cursor: pointer;
  }
}
</style>