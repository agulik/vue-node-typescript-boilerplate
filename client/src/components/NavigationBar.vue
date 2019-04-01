<template>
  <div class="navigation">
    <p>Gusta 🍽</p>
    <p>Recipes</p>
    <p>My Favourites</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "NavigationBar"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 64px;
  width: 100%;
  background-color: rgb(246, 247, 248);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
}
.navigation p {
  margin: 0;
  padding-left: 32px;
}

.navigation p:hover {
  color: #000000;
  cursor: pointer;
}
</style>
