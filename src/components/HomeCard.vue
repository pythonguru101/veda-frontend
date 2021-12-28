<template>
  <div class="flex-row home-card-container">
    <div class="home-card">
      <p class="big-font text-bold">Online group discussion</p>
      <p class="small-font small-text-color">Have a meeting with my friends</p>
      <div class="home-card-flex">
        <img src="../assets/calendar.png" class="card-image" />
        <p class="date">Today</p>
        <img src="../assets/watch.png" class="card-image" />
        <p class="time">12.30PM</p>
      </div>
    </div>
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
@import "../styles/components/HomeCard.css";
</style>
