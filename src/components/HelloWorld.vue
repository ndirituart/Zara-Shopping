<template>
  <div class="hello">
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#results">Results</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
    <h1>{{ msg }}</h1>
    <main>
      <img src="@/assets/MyApp Logo.png" alt="Company Logo" class="logo">
      <h1>Welcome to our Marketing Advisor</h1>
    </main>
    <footer>
      <p>&copy; 2024 Your Company Name</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
header {
  background-color: #001f3f; /* Dark blue */
  padding: 10px 0;
}
header a {
  color: #ffffff; /* White */
  text-decoration: none;
}
header a:hover {
  text-decoration: underline;
}
footer {
  background-color: #001f3f; /* Dark blue */
  color: #ffffff; /* White */
  text-align: center;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
}

.logo {
  width: 100px; /* Set the desired width */
  height: 100px; /* Set the desired height */
  border-radius: 50%; /* Make the image circular */
  border: 2px solid black; /* Add a black border */
  object-fit: cover; /* Ensure the image covers the entire area */
}
</style>
