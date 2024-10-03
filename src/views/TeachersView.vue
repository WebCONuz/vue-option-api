<script setup>
import { ref, onMounted } from "vue";
import Search from "../components/Search.vue";
import AdminCard from "../components/AdminCard.vue";
import axios from "../api/axios.js";

const teachers = ref([]);
const loading = ref(false);
async function getData(searchString) {
  try {
    loading.value = true;
    let response;
    if (searchString) {
      response = await axios.get(
        `https://dummyjson.com/users/search?q=${searchString}`
      );
    } else {
      response = await axios.get("https://dummyjson.com/users");
    }
    if (response.status === 200) {
      teachers.value = response.data.users;
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  getData();
});
</script>

<template>
  <main class="flex">
    <AdminSidebar class="w-1/5 h-screen sticky top-0 left-0" />
    <div class="w-4/5 bg-blue-200">
      <AdminHeader title="Ustozlar"></AdminHeader>
      <div class="px-8 py-8">
        <!-- CONTENT -->
        <Search :searchFunction="getData" />
        <section
          v-if="loading"
          class="w-full h-[60vh] flex items-center justify-center"
        >
          <span class="uppercase text-3xl font-semibold text-purple-600"
            >Loading...</span
          >
        </section>
        <div v-else>
          <section
            v-if="teachers.length === 0"
            class="w-full h-[60vh] flex items-center justify-center bg-white rounded-xl"
          >
            <span class="uppercase text-3xl font-bold text-purple-600">
              Not Found
            </span>
          </section>
          <section v-else class="grid grid-cols-4 gap-8">
            <AdminCard v-for="item in teachers" :key="item?.id" :data="item" />
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
