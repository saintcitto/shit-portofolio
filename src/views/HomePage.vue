<template>
  <div class="home">
    <AppHeader />
    <About />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import About from "@/components/AppAbout.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    About,
    AppFooter,
  },
};
</script>

<style>
.home {
  font-family: Arial, sans-serif;
  color: #333;
}
</style>
