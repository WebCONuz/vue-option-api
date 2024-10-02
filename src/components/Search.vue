<script setup>
// import { ref } from "vue";

const props = defineProps({
  searchFunction: Function,
});
// const param = ref("");
function searchData(e) {
  props.searchFunction(e.target.value);
}
</script>

<template>
  <div class="flex items-center justify-between mb-10">
    <div class="relative">
      <i class="bx bx-search absolute top-2 left-3 text-3xl text-gray-400"></i>
      <input
        type="text"
        placeholder="Izlash"
        class="py-3 pl-12 pr-4 rounded-[25px] w-[350px] outline-0 border-0"
        @input="searchData"
      />
    </div>
    <button
      class="bg-purple-600 text-white py-2 px-8 w-[150px] rounded-[25px] outline-none border-none text-2xl font-extrabold"
    >
      +
    </button>
  </div>
</template>

<style scoped></style>
