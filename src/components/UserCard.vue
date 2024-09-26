<script>
export default {
  components: {},
  data() {
    return {
      isGray: false,
    };
  },
  props: {
    user: Object,
    getData: Function,
  },
  methods: {
    changeBg() {
      this.isGray = !this.isGray;
      console.log(this.isGray);
    },
  },
  computed: {},
  watch: {},
  mounted() {
    localStorage.setItem("data", "11");
  },
  updated() {
    console.log("Updated Component");
    this.getData(2);
  },
  unmounted() {
    console.log("Component was unmounted or remove from DOM");
    localStorage.removeItem("data");
  },
};
</script>

<template>
  <section :class="isGray ? 'bg-gray-300' : 'bg-transparent'">
    <div class="flex items-center py-10">
      <div class="w-1/2">
        <img
          :src="user?.image"
          alt="user-image"
          class="w-1/2 block mx-auto rounded-full border-[15px] border-gray-300"
        />
      </div>
      <div class="w-1/2">
        <p class="text-lg text-gray-700 font-medium mb-2">
          {{ user?.firstName }}
        </p>
        <p class="text-lg text-gray-700 font-medium mb-2">
          {{ user?.lastName }}
        </p>
        <p class="text-lg text-gray-700 font-medium mb-2">
          {{ user?.maidenName }}
        </p>
        <p class="text-lg text-gray-700 font-medium mb-2">
          {{ user?.age }}
        </p>
        <p class="text-lg text-gray-700 font-medium mb-2">
          {{ user?.gender }}
        </p>
        <p class="text-lg text-gray-700 font-medium mb-2">
          {{ user?.email }}
        </p>
        <p class="text-lg text-gray-700 font-medium mb-2">
          {{ user?.phone }}
        </p>
        <p class="text-lg text-gray-700 font-medium mb-2">
          {{ user?.username }}
        </p>
        <p class="text-lg text-gray-700 font-medium mb-2">
          {{ user?.password }}
        </p>
        <p class="text-lg text-gray-700 font-medium mb-2">
          {{ user?.birthDate }}
        </p>
        <p class="text-lg text-gray-700 font-medium mb-2">
          {{ user?.height }}
        </p>
        <p class="text-lg text-gray-700 font-medium mb-2">
          {{ user?.weight }}
        </p>
        <p class="text-lg text-gray-700 font-medium mb-2">
          {{ user?.ip }}
        </p>
        <p class="text-lg text-gray-700 font-medium mb-2">
          {{ user?.address?.address }}
        </p>
      </div>
    </div>
    <button
      @click="changeBg"
      class="py-3 block w-full bg-green-600 text-white outline-none rounded-md"
    >
      Change Data
    </button>
  </section>
  <!-- <div><pre>{{ user }}</pre></div> -->
</template>

<style></style>
