<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

import { provideApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./apollo";

console.log("provided");

provideApolloClient(apolloClient);
</script>

<template>
  <HelloWorld />
</template>

<style>
body {
  background-color: #0d1b2a;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e0e1dd;
  margin: 80px 40px;
}

a {
  color: #778da9;
}

a:hover {
  color: #415a77;
}
</style>
