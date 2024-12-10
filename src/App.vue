<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "@/views/HomePage.vue";

export default {
  components: {
    Home,
  },
};
</script>

<style>
body {
  font-size: 16px;
  color: #333; /* Default for web */
}

@media (max-width: 768px) {
  body {
    font-size: 14px; /* Adjust for mobile */
  }
}
</style>
