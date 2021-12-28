<template>
  <div>
    <Toast v-if="showToast" />
    <Header />
    <Card />
    <div class="input_home_container">
      <input type="text" class="input color" placeholder="Find your tasks" />
      <img src="../assets/search.png" class="input_img" />
    </div>
    <div class="flex-row">
      <Button title="Todo" />
      <Button title="completed" />
    </div>
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <div class="bottom-container">
      <img src="../assets/bottom-bg.png" class="bottom-bg" />
      <div class="bottom-child">
        <img src="../assets/plus.png" class="plus" />
        <p class="bottom-text">Add Task</p>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from "../hooks/Toast.vue";
import Header from "../components/Header.vue";
import Card from "../components/Card.vue";
import Button from "../components/Button.vue";
import HomeCard from "../components/HomeCard.vue";

export default {
  name: "Home",
  components: { Toast, Header, Card, Button, HomeCard },
  data() {
    return {
      showToast: true,
    };
  },
  methods: {
    triggerToast() {
      setTimeout(() => (this.showToast = false), 2500);
    },
  },
  mounted() {
    this.triggerToast();
  },
};
</script>

<style scoped>
@import "../styles/screens/Home.css";
</style>
