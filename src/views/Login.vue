<template>
  <div>
    <input v-model.trim="token" type="text" />
    <button @click="login">登陆</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "06d4472b-b879-402c-abcb-e8cd7ccb31bd",
    };
  },
  methods: {
    login() {
      if(this.token === '06d4472b-b879-402c-abcb-e8cd7ccb31bd'){
        this.$axios
        .post("/accesstoken", { accesstoken: this.token })
        .then((res) => {
          this.$router.push("/");
          const userInfo = res
          delete userInfo.success
          this.$store.commit('getToken',userInfo)
          localStorage.setItem("token", true)
        })
        .catch((error) => console.log(error));
      }
    },
  },
};
</script>

<style>
</style>