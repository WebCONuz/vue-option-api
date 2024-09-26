<script>
import axios from "../api/axios.js";
export default {
  components: {},
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProducts() {
      const res = await axios.get("https://dummyjson.com/products");
      if (res.status === 200) {
        this.products = res.data.products;
      }
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<template>
  <main>
    <div class="container">
      <p class="text-red-500 py-10 text-center text-2xl font-medium">
        About Page
      </p>
      <p class="text-center my-3">
        <router-link to="/" class=""> Bosh sahifasiga o'tish </router-link>
      </p>
      <pre>{{ products }}</pre>
    </div>
  </main>
</template>

<style></style>
