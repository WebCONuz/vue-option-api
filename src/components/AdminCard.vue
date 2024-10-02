<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <div
    class="bg-white rounded-xl flex flex-col items-center relative px-4 pt-6 pb-6"
  >
    <img
      :src="props?.data?.image"
      alt="avatar"
      class="w-[160px] mb-1 rounded-full"
    />
    <h3 class="font-semibold text-blue-800 text-lg mb-1">
      {{ props?.data?.firstName }} {{ props?.data?.lastName }}
    </h3>
    <p class="font-medium text-blue-600 text-sm mb-8">
      ID {{ props?.data?.password }}
    </p>
    <div class="flex items-center w-full justify-between">
      <div class="flex items-center">
        <div
          class="w-9 h-9 rounded-full bg-gray-400 flex items-center justify-center mr-2"
        >
          <i class="bx bx-user text-white text-xl"></i>
        </div>
        <div>
          <h4 class="text-gray-400">Vazni</h4>
          <hp class="text-sm text-blue-800 font-semibold">{{
            props?.data?.weight
          }}</hp>
        </div>
      </div>
      <div class="flex items-center">
        <div
          class="w-9 h-9 rounded-full bg-gray-400 flex items-center justify-center mr-2"
        >
          <i class="bx bx-calendar-alt text-white text-xl"></i>
        </div>
        <div>
          <h4 class="text-gray-400">Jinsi</h4>
          <hp class="text-sm text-blue-800 font-semibold">{{
            props?.data?.gender
          }}</hp>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
