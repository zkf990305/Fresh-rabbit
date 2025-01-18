<template>
  <div class="detail">订单详情页</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  orderId: {
    type: String,
    default: '',
  },
})
console.log(props.orderId)
</script>

<style scoped></style>
