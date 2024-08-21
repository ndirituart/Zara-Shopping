<template>
  <div id="app">
    <header class="header">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/results" class="nav-item">Results</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
    </header>
    
    <body class="main-content">
      <img src="@/assets/MyApp Logo.png" alt="Company Logo" class="logo">
    <h1>Welcome to our Marketing Advisor</h1>
    <button @click="goToBudgetHome">Go to Budget Home</button>
    <div v-if="value">
    </div>
    <router-view></router-view>
    </body>
    
    <footer class="footer">
      <p>&copy; Marketing Budget @ 2024</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToBudgetHome() {
      this.$router.push({ name: 'BudgetHome' });
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #83b9f0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
}

.header {
  display: flex;
  justify-content: center;
  background-color: #161176;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-item {
  color: #ffffff;
  margin: 0 15px;
  text-decoration: none;
}

.nav-item:hover {
  text-decoration: underline;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.circular-logo {
    width: 100px; /* Set the desired width */
    height: 100px; /* Set the desired height */
    border-radius: 50%; /* Make the image circular */
    object-fit: cover; /* Ensure the image covers the entire area */
}


.footer {
  background-color: #001f3f;
  color: #ffffff;
  text-align: center;
  padding: 10px 0;
}
</style>
