<template>
  <div id="auth">
    <img alt="bg logo" src="../assets/bg.png" class="bgImage" />
    <img alt="app logo" src="../assets/app-logo.png" class="logo" />
    <div class="input_container">
      <input
        type="text"
        class="input"
        v-model="input.email"
        placeholder="Email"
      />
      <img src="../assets/mail.png" class="input_img" />
    </div>
    <div class="input_container">
      <input
        type="text"
        class="input"
        v-model="input.password"
        placeholder="Password"
      />
      <img src="../assets/password.png" class="input_img" />
    </div>
    <span v-if="error">
      <p class="errorText">{{ errorText }}</p>
    </span>
    <div class="input_container">
      <button class="button" @click="login()">Login</button>
    </div>
    <h3 class="text">or continue with</h3>
    <div class="social_container">
      <div class="social_box">
        <img alt="facebook" src="../assets/facebook.png" class="social_logo" />
        <h6 class="fb">Facebook</h6>
      </div>
      <div class="social_box social_box_right">
        <img alt="google" src="../assets/google.png" class="social_logo" />
        <h6 class="google">Google</h6>
      </div>
    </div>
    <div class="last_text">
      <h3 class="left_text">Don't have an account?</h3>
      <h3 class="right_text" @click="gotoRegistration()">SIGN UP</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
      error: false,
      errorText: "",
    };
  },
  methods: {
    login() {
      if (this.input.email === "" || this.input.password === "") {
        this.error = true;
        this.errorText = "All text field are required!";
      } else if (
        this.input.email === "admin" &&
        this.input.password === "123"
      ) {
        this.$store.commit("setAuthentication", true);
        this.$store.commit("toastMessage", "Login succesfully!");
        this.$router.replace({ name: "home" });
      } else {
        this.error = true;
        this.errorText = "Invalid user name or password!";
      }
    },
    gotoRegistration() {
      this.$router.replace({ name: "register" });
    },
  },
};
</script>

<style>
@import "../styles/screens/Auth.css";
</style>
