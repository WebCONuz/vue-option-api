<script>
export default {
  components: {},
  data() {
    return {
      navItems: [
        {
          icon: "bx bx-home",
          text: "Asosiy",
        },
        {
          icon: "bx bxs-user-detail",
          text: "Ustozlar",
        },
        {
          icon: "bx bx-user",
          text: "Mijozlar",
        },
        {
          icon: "bx bxs-coupon",
          text: "Jihozlar",
        },
        {
          icon: "bx bxl-product-hunt",
          text: "Maxsulotlar",
        },
        {
          icon: "bx bx-food-menu",
          text: "Buyurtmalar",
        },
        {
          icon: "bx bx-conversation",
          text: "Savol javob",
        },
        {
          icon: "bx bx-line-chart",
          text: "Statistika",
        },
      ],
    };
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {},
};
</script>

<template>
  <aside class="bg-purple-600 pl-11 pt-10">
    <nav>
      <router-link
        to="#"
        class="flex items-center py-3 px-6 hover:bg-blue-200 rounded-l-full group duration-200"
        v-for="(item, index) in navItems"
        :key="index + Math.random()"
      >
        <i
          class="text-3xl mr-4 text-white group-hover:text-purple-600 duration-200"
          :class="item?.icon"
        ></i>
        <span
          class="text-lg font-medium text-white group-hover:text-purple-600 duration-200"
        >
          {{ item?.text }}
        </span>
      </router-link>
    </nav>
  </aside>
</template>

<style></style>
