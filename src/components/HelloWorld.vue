<template>
  <div class="container">
    <header>
      <nav>
        <ul>
          <li><router-link to="/explorepage">Explore</router-link></li>
          <li><router-link to="/usercart">Shopping</router-link></li>
          <li><router-link to="/explorepage">Search</router-link></li>
          <li><router-link to="/login">Account</router-link></li>
        </ul>
      </nav>
    </header>
    <div class="content">
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo" class="circular-logo">
      </div>
      <h1>{{ msg }}</h1>
      <p>
        For a guide and recipes on how to configure / customize this project,<br>
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>
      <!-- Place router-view here to render the routed component -->
      <router-view></router-view>
    </div>
    <footer>
      <p>&copy; Zara Shopping @2024</p>
    </footer>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
/* Container should fill the viewport height */
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header should be at the top */
header {
  flex-shrink: 0;
  padding: 20px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
}

.logo {
  margin-right: 20px;
}

.circular-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav li {
  margin-right: 20px;
}

nav a {
  color: #337ab7;
  text-decoration: none;
}

nav a:hover {
  color: #23527c;
}

/* Content will expand to take available space */
.content {
  flex-grow: 1;
  padding: 20px;
  text-align: center;
}

/* Footer should be at the bottom */
footer {
  flex-shrink: 0;
  padding: 20px;
  background-color: #f0f0f0;
  border-top: 1px solid #ccc;
  text-align: center;
}

h1 {
  margin: 20px 0;
}

p {
  margin: 20px 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
