<template>
  <header class="header">
    <h1>Ryan Shah Teja Perdana</h1>
    <img src="@/assets/profile.jpeg" alt="Profile Picture" class="profile-pic" />
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style>
.header {
  text-align: center;
  margin: 20px 0;
  font-style: Sf Pro;
  color: white;
}
.profile-pic {
  width: 300px;
}
h1 {
  font-size: 24px;
  margin-top: 40px;
}
</style>
