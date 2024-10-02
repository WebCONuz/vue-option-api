<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <header
    class="py-3 px-8 flex items-center justify-between bg-purple-600 border-l border-gray-400 sticky top-0 left-0 z-10"
  >
    <h2 class="text-white text-3xl font-bold">{{ props.title }}</h2>

    <div class="flex items-center gap-x-5">
      <div
        class="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center shadow-lg"
      >
        <i class="bx bx-bell text-gray-400 text-3xl"></i>
      </div>
      <div
        class="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center shadow-lg"
      >
        <i class="bx bx-cog text-gray-400 text-3xl"></i>
      </div>
      <div class="flex items-center gap-x-4">
        <div>
          <h3 class="text-white font-bold">Ochilov M.</h3>
          <p class="text-gray-200 text-sm font-medium">Admin</p>
        </div>
        <div class="w-[60px] h-[60px] rounded-full shadow-lg">
          <img
            src="/admin.png"
            alt="admin"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style></style>
