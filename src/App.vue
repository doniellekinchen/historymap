<template>
  <div id="app">
    <h1 style="font-size:4.5vw">Unveiling America</h1>
    <h3>An Interactive State-by-State Journey</h3>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/aboutpage">About</router-link>
      <!-- add more links as needed -->
    </nav>
    <router-view />
    <p>Vue with Love ❤️. © 2024. All rights reserved.</p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f0f8ff; /* Your desired background color */
  height: 100vh; /* This ensures the background covers the full viewport height */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 1rem;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
