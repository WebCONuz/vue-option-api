<script setup>
const props = defineProps({
  data: Array,
  headers: Array,
});
</script>

<template>
  <table class="bg-white w-full rounded-md">
    <thead>
      <tr>
        <td
          v-for="(item, index) in props.headers"
          :key="index"
          class="py-2 px-4 border border-gray-400 text-sm uppercase text-gray-700"
        >
          <b>{{ item?.title }}</b>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(trData, trInx) in props.data" :key="trInx + Math.round()">
        <td
          v-for="(tdHeaders, hInx) in props.headers"
          :key="hInx + Math.round()"
          class="px-4 border border-gray-400 text-gray-600"
        >
          <slot :name="'td_' + tdHeaders.value" :item="trData">{{
            trData[tdHeaders.value]
          }}</slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped></style>
