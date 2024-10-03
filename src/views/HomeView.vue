<script>
import UserCard from "../components/UserCard.vue";
export default {
  components: {
    UserCard,
  },
  data() {
    return {
      userData: {},
      isLoading: false,
      isDel: false,
    };
  },
  methods: {
    async getData(id) {
      try {
        this.isLoading = true;
        const res = await fetch(`https://dummyjson.com/users/${id}`);
        if (res.status === 200) {
          this.userData = await res.json();
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoading = false;
      }
    },

    rm() {
      this.isDel = true;
    },
  },
  mounted() {
    this.getData(1);
  },
};
</script>

<template>
  <main>
    <div
      v-if="isLoading"
      class="w-full h-screen flex items-center justify-center"
    >
      <span class="text-4xl font-medium text-orange-500">LOADING ...</span>
    </div>
    <div v-else class="container">
      <UserCard v-if="!isDel" :user="userData" :getData="getData" />
      <p v-else class="text-red-500 py-10 text-center text-2xl font-medium">
        Card was deleted!
      </p>
    </div>
    <div class="container mt-2">
      <button
        @click="rm"
        class="py-3 block w-full bg-red-600 text-white outline-none rounded-md"
      >
        Delete Card
      </button>
      <p class="text-center mt-3">
        <router-link to="/about" class="">
          About sahifasiga o'tish
        </router-link>
      </p>
      <p class="text-center my-3">
        <router-link to="/login" class="">
          Login sahifasiga o'tish
        </router-link>
      </p>
      <p class="text-center my-3">
        <router-link to="/teachers" class="">
          Teachers sahifasiga o'tish
        </router-link>
      </p>
    </div>
  </main>
</template>

<style></style>
