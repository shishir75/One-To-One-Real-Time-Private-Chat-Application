<template>
  <div>
    <div class="container-chat clearfix">
      <div class="people-list" id="people-list">
        <div class="search">
          <input type="text" placeholder="search" />
          <i class="fa fa-search"></i>
        </div>
        <ul class="list">
          <li
            class="clearfix"
            @click.prevent="selectUser(user.id)"
            v-for="user in allUser"
            :key="user.id"
          >
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
              alt="avatar"
            />
            <div class="about">
              <div class="name">{{ user.name }}</div>
              <div class="status">
                <i class="fa fa-circle online"></i> online
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="chat" v-if="userMessages.user">
        <div class="chat-header clearfix">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
            alt="avatar"
          />

          <div class="chat-about">
            <div v-if="userMessages.user" class="chat-with">Chat with {{ userMessages.user.name }}</div>
            <div
              class="chat-num-messages"
            >already {{ userMessages.messages.length }} {{ userMessages.messages.length > 1 ? "messages" : "message" }}</div>
          </div>
          <i class="fa fa-star"></i>
        </div>
        <!-- end chat-header -->

        <div class="chat-history">
          <ul>
            <li class="clearfix" v-for="message in userMessages.messages" :key="message.id">
              <div class="message-data align-right">
                <span class="message-data-time">{{ message.created_at | timeFormat}}</span>
                &nbsp; &nbsp;
                <span class="message-data-name">{{ message.user.name }}</span>
                <i class="fa fa-circle me"></i>
              </div>
              <div
                class="message float-right"
                :class="message.user.id === userMessages.user.id? 'other-message': 'my-message'"
              >{{ message.message }}</div>
            </li>
          </ul>
        </div>
        <!-- end chat-history -->

        <div class="chat-message clearfix">
          <textarea
            name="message-to-send"
            id="message-to-send"
            placeholder="Type your message"
            rows="3"
          ></textarea>

          <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
          <i class="fa fa-file-image-o"></i>

          <button>Send</button>
        </div>
        <!-- end chat-message -->
      </div>
      <!-- end chat -->
    </div>
    <!-- end container -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("userList"); // hit an actions
  },
  computed: {
    allUser() {
      return this.$store.getters.userList;
    },
    userMessages() {
      return this.$store.getters.userMessage;
    },
  },
  created() {},
  methods: {
    selectUser(userId) {
      this.$store.dispatch("userMessage", userId); // hit an actions
    },
  },
};
</script>

<style lang="scss" scoped></style>
