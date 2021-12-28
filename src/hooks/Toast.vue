<template>
  <div class="toast-wrapper">
    <div class="toast">{{ $store.state.toastText }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.toast-wrapper {
  position: fixed;
  width: 100%;
  top: 20px;
}
.toast {
  padding: 12px;
  color: white;
  background: #a5a5a5;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgb(0 0 0 / 20%);
  max-width: fit-content;
  margin: 0 auto;
}
</style>
