<template>
  <div class="card">
    <h3>{{ title}}</h3>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card",
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 300px;
  background-color: #f9fafb;
  border-radius: 6px;
  box-shadow: 0 16px 16px rgba(103, 110, 144, 0.05),
    0 8px 8px rgba(103, 110, 144, 0.05), 0 4px 4px rgba(103, 110, 144, 0.05),
    0 2px 2px rgba(103, 110, 144, 0.05);
  margin: 32px;
}
.card:hover {
  cursor: pointer;
}
</style>