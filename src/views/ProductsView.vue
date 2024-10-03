<script setup>
import { ref, onMounted } from "vue";
import Search from "../components/Search.vue";
import axios from "../api/axios.js";

const products = ref([]);
const loading = ref(false);

const headers = [
  { title: "Rasmi", value: "thumbnail" },
  { title: "Nomi", value: "title" },
  { title: "Narxi", value: "price" },
  { title: "Reyring", value: "rating" },
  { title: "Turi", value: "category" },
  { title: "Ishlab chiqaruvchi", value: "brand" },
  { title: "Vazni", value: "weight" },
  { title: "Fikrlar", value: "reviews" },
  { title: "Actions", value: "actions" },
];

async function getData(searchString) {
  try {
    loading.value = true;
    let response;
    if (searchString) {
      response = await axios.get(
        `https://dummyjson.com/users/search?q=${searchString}`
      );
    } else {
      response = await axios.get("https://dummyjson.com/products");
    }
    if (response.status === 200) {
      products.value = response.data.products;
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
      <AdminHeader title="Ustozlar" />
      <div class="px-8 py-8">
        <Search :searchFunction="getData" />
        <AdminTable :data="products" :headers="headers">
          <template #td_thumbnail="{ item }">
            <img :src="item?.thumbnail" alt="prosuct-image" class="w-14" />
          </template>
          <template #td_reviews="{ item }">
            {{ item?.reviews?.length }} ta firk
          </template>
          <template #td_weight="{ item }"> {{ item?.weight }} kg </template>
          <template #td_price="{ item }"> $ {{ item?.price }} </template>
          <template #td_brand="{ item }"> {{ item?.brand }} </template>
          <template #td_rating="{ item }">
            <div class="flex items-center">
              <i class="bx bx-star text-yellow-400 text-xl mr-2"></i>
              <span>{{ item?.rating }}</span>
            </div>
          </template>
          <template #td_actions="{ item }">
            <div class="flex items-center gap-x-2">
              <i class="bx bx-show-alt text-blue-500 text-xl"></i>
              <i class="bx bx-edit text-green-500 text-xl"></i>
              <i class="bx bx-trash text-red-500 text-xl"></i>
            </div>
          </template>
        </AdminTable>
      </div>
    </div>
  </main>
</template>

<style></style>
