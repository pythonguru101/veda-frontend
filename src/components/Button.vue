<template>
  <button class="button-style" @click="null">{{ title }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
.button-style {
  width: 100%;
  background-color: #f0eefb; /* Green */
  border: 1px solid #534a99;
  color: #534a99;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  border-radius: 24px;
  margin: 5px;
  margin-bottom: 25px;
}
/* .button-style:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
} */
</style>
