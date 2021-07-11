<template>
  <div id="nav">
    <router-link to="/">Import</router-link> |
    <router-link to="/invoicing">Invoice</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #d0d7dd;

    &.router-link-exact-active {
      color: #202422;
    }
  }
}
</style>
