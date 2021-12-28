<template>
  <div id="auth">
    <img alt="bg logo" src="../assets/bg.png" class="bgImage" />
    <img alt="app logo" src="../assets/app-logo.png" class="logo" />
    <div class="input_container">
      <input
        required
        type="text"
        class="input"
        placeholder="Full name"
        v-model="input.name"
      />
      <img src="../assets/user.png" class="input_img" />
    </div>
    <div class="input_container">
      <input
        required
        type="text"
        class="input"
        placeholder="Email"
        v-model="input.email"
      />
      <img src="../assets/mail.png" class="input_img" />
    </div>
    <div class="input_container">
      <input
        required
        type="password"
        class="input"
        placeholder="Password"
        v-model="input.password"
      />
      <img src="../assets/password.png" class="input_img" />
    </div>
    <div class="input_container">
      <input
        required
        type="password"
        class="input"
        placeholder="Confirm Password"
        v-model="input.confirmPass"
      />
      <img src="../assets/password.png" class="input_img" />
    </div>
    <span v-if="input.error">
      <p class="errorText">{{ input.errorText }}</p>
    </span>
    <div class="input_container">
      <button class="button" @click="register()">Sign Up</button>
    </div>
    <div class="last_text">
      <h3 class="left_text">Already have an account?</h3>
      <h3 class="right_text" @click="gotoLogin()">LOGIN</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      input: {
        name: "",
        email: "",
        password: "",
        confirmPass: "",
        error: false,
        errorText: "",
      },
    };
  },
  methods: {
    gotoLogin() {
      this.$router.replace({ name: "login" });
    },
    register() {
      if (
        this.input.name === "" ||
        this.input.email === "" ||
        this.input.password === "" ||
        this.input.confirmPass === ""
      ) {
        this.input.error = true;
        this.input.errorText = "All text field are required!";
      }
      if (this.input.password !== this.input.confirmPass) {
        this.input.error = true;
        this.input.errorText = "Password are not same!";
      }
    },
  },
};
</script>

<style>
@import "../styles/screens/Auth.css";
</style>
