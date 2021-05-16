<template>
  <div v-if="topic" class="topic">
    <Panel width="900">
      <template #content>
        <div>
          <h2>
            {{ topic.title }}
            <!-- 需要登陆了才出现这个按钮 -->
            <button v-if="true" @click="collect">
              {{ topic.is_collect ? "取消收藏" : "收藏" }}
            </button>
          </h2>
          <div v-html="topic.content"></div>
        </div>
      </template>
    </Panel>
    <Panel>
      <template #header>
        <span class="comment">回复</span>
      </template>
      <template #content>
        <div>
          <div
            class="comment-item"
            v-for="comment in topic.replies"
            :key="comment.id"
          >
            <img width="30px" :src="comment.author.avatar_url" alt="" />
            <span>{{ comment.author.loginname }}</span
            ><span v-html="comment.content"></span>
            <div>
              <button
                @click="upClick(comment.id)"
                :class="{ 'up-active': comment.is_uped }"
              >
                点赞{{ comment.ups.length }}
              </button>
              <!-- 判断是否登陆决定评论是否存在 -->
              <button @click="otherSubmit(comment)">回复</button>
            </div>
            <div v-if="comment.id === reply_id">
              <textarea ref="textarea" v-model="reply_text"></textarea>
              <button @click="otherSubmit1(comment.id)">回复</button>
            </div>
          </div>
          <br />
          <br />
          <textarea v-model="text" name="" id="" cols="30" rows="10"></textarea>
          <button @click="submit">提交</button>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../layout/Panel.vue";
export default {
  name: "Topic",
  components: {
    Panel,
  },
  data() {
    return {
      topic: null,
      //文章回复内容
      text: "",
      // 评论回复id
      reply_id: "",
      //评论回复内容
      reply_text: "",
    };
  },
  async created() {
    const { topicId } = this.$route.params;
    const token = true;
    const url = token
      ? `/topic/${topicId}? 06d4472b-b879-402c-abcb-e8cd7ccb31bd`
      : `/topic/${topicId}`;
    const res = await this.$axios.get(url);
    this.topic = res.data;
    console.log(res.data);
  },
  methods: {
    async upClick(id) {
      // 需要判断是否登陆 和是否是自己的评论
      if (true) {
        const res = await this.$axios.post(`/reply/${id}/ups`, {
          accesstoken: "06d4472b-b879-402c-abcb-e8cd7ccb31bd",
        });
        const userId = "06d4472b-b879-402c-abcb-e8cd7ccb31bd";
        const currentComment = this.topic.replies.find(
          (item) => item.id === id
        );
        currentComment.is_uped = res.action === "up" ? true : false;
        res.action === "up"
          ? currentComment.ups.push(userId)
          : currentComment.ups.pop();
      }
    },
    // 文章的回复
    async submit() {
      const { text } = this;
      if (text) {
        const res = await this.$axios.post(`topic/${this.topic.id}/replies`, {
          accesstoken: "06d4472b-b879-402c-abcb-e8cd7ccb31bd",
          content: text,
        });
        //如何更新页面，
        // 1.根据后台 id text 作假 的评论对象 更新 topic
        // 2. 重新请求
        const newComment = {
          id: res.reply_id,
          is_uped: false,
          ups: [],
          content: `<p>${text}</p>`,
          author: {
            avatar_url:
              "https://avatars.githubusercontent.com/u/79759555?v=4&s=120",
            loginname: "labwudazi",
          },
        };
        this.topic.replies.push(newComment);
        this.text = "";
      }
    },
    //  评论的回复
    otherSubmit(comment) {
      const { id, author } = comment;
      this.reply_id = id;
      this.reply_text = `@${author.loginname}`;
      this.$nextTick(function () {
        this.$refs.textarea[0].focus();
      });
    },
    async otherSubmit1(id) {
      const { reply_text } = this;
      if (reply_text) {
        const res = await this.$axios.post(`topic/${this.topic.id}/replies`, {
          accesstoken: "06d4472b-b879-402c-abcb-e8cd7ccb31bd",
          content: reply_text,
          reply_id: id,
        });
        //如何更新页面，
        // 1.根据后台 id text 作假 的评论对象 更新 topic
        // 2. 重新请求
        const newComment = {
          id: res.reply_id,
          is_uped: false,
          ups: [],
          content: `<p>${reply_text.replace(
            /@[\w-]+/,
            `<a href='/user/xxx'>@labwudazi</a>`
          )}</p>`,
          author: {
            avatar_url:
              "https://avatars.githubusercontent.com/u/79759555?v=4&s=120",
            loginname: "labwudazi",
          },
        };
        this.topic.replies.push(newComment);
        this.reply_text = "";
        this.reply_id = "";
      }
    },
    // 收藏事件
    async collect() {
      const { is_collect, id } = this.topic;
      console.log(is_collect, id,this.topic)
      const token = "06d4472b-b879-402c-abcb-e8cd7ccb31bd";
      if (is_collect) {
        // 取消收藏请求
        await this.$axios.post("/topic_collect/de_collect", {
          topic_id: id,
          accesstoken: token,
        });
        this.topic.is_collect = false;
      } else {
        // 取消收藏请求
        await this.$axios.post("/topic_collect/collect", {
          topic_id: id,
          accesstoken: token,
        });
        this.topic.is_collect = true;
      }
    },
  },
};
</script>

<style leng="less">
.markdown-text img {
  width: 100%;
}
.panel .content h2 {
  margin: 0;
}
.comment {
  display: block;
  padding: 10px;
}
.comment-item {
  padding-bottom: 10px;
  border-bottom: solid 1px #ccc;
}
.up-active {
  color: red;
}
</style>