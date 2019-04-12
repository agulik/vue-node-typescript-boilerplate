<template>
  <div class="home">
    <div class="cards-wrapper">
        <Card v-for="(recipe, index) in recipes" :key="index" :title="recipe.title" :imageSrc="recipe.imagesource" :link="recipe.link" />
    <Card title="Vegan Mac & Cheese" />
    <Card title="Spaghetti Carbonara"/>
  </div>
    </div>
</template>

<script lang="ts">
import axios from "axios"
import Card from "./Card.vue"

export default {
  name: "Home",
  components: {
    Card
  },
  data() {
    return {
      recipes: []
    }
  },
  async created() {
    const response = await axios.get(`${process.env.VUE_APP_SERVER_URI}/recipes/all`)
    console.log({response})
    this.recipes = response.data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: rgb(246, 247, 248);
}

.home .cards-wrapper {
  margin-top: 20px;
}
</style>
