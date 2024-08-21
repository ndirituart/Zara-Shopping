<template>
  <div class="login-container">
    <h1>{{ msg }}</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="message" :class="{'error-message': isError}">{{ message }}</p>
    <div class="register-container">
      <p>Are you not a member?</p>
      <button><router-link to="/signup" class="no-underline text-black">Register</router-link></button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  props: {
    msg: {
      type: String,
      default: 'Welcome to Zemo!'
    }
  },
  data() {
    return {
      username: '',
      password: '',
      message: '',
      isError: false
    };
  },
  methods: {
    async login() {
      try {
        // Send POST request to Laravel API
        const response = await axios.post('http://localhost:8000/api/login', {
          username: this.username,
          password: this.password
        });

        // Handle successful login response
        this.message = response.data.message;
        this.isError = false;

        // Redirect to the homepage or another page
        this.$router.push('/');
      } catch (error) {
        // Handle login error
        this.message = error.response ? error.response.data.message : error.message;
        this.isError = true;
      }
    }
  }
}
</script>


<style scoped>
.login-container {
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  text-align: center;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  padding: 10px 20px;
  background-color: #2aa8df;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #1935ec;
}
button:active{
  background-color: #5b1ed6;
}

.register-container {
  margin-top: 20px;
}
</style>
