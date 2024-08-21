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
      <div class="register-container">
        <p>Are you not a member?</p>
        <button><router-link to="/signupPage" class="no-underline text-black">Register </router-link></button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'LoginPage',
    
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          // Send POST request to Laravel API
          const response = await axios.post('http://localhost:8000/api/login', {
            email: this.username,
            password: this.password
          });
  
          // Handle successful login response
          console.log('Login successful:', response.data);
  
          // You can redirect to another page or store the token here home page
         this.$router.push('/');
        } catch (error) {
          // Handle login error
          console.error('Login failed:', error.response ? error.response.data : error.message);
  
          // Optionally show an error message to the user
          alert('Login failed. Please check your credentials and try again.');
        }
      }
    }
  }
  </script>