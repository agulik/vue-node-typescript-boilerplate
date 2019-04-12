<template>
  <div class="card">
    <h3>{{ title}}</h3>
    <div class="image-wrapper">
      <div :style="style" v-if="imageSrc && imageSrc" />
    </div>
    <a v-if="link && link" :href="link" target="_blank">visit the link</a>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card",
  props: {
    title: String,
    imageSrc: String,
    link: String
  },
  computed: {
    style() {
      return `
      background-image: url('${this.imageSrc}');
      background-size: cover;
      background-position: center top;
      width: 220px;
      height: 220px;
      `
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  width: 300px;
  background-color: #f9fafb;
  border-radius: 6px;
  box-shadow: 0 16px 16px rgba(103, 110, 144, 0.05),
    0 8px 8px rgba(103, 110, 144, 0.05), 0 4px 4px rgba(103, 110, 144, 0.05),
    0 2px 2px rgba(103, 110, 144, 0.05);
  margin: 32px;
  padding: 8px;
}
.card:hover {
  cursor: pointer;
}
.card .image-wrapper {
  display: flex;
  justify-content: center;
}
.card a {
  text-decoration: none;
  margin: 20px 0;
}
.card a:visited {color: #2c3e50;} 
.card a:hover {color: #2c3e50;}  
.card a:active {color:#2c3e50;} 

</style>