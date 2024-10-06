<script setup>
import { ref } from 'vue'

const items = ref([{ message: 'Student @ UIC' }, { message: 'Former Intern @ Siemens' }])

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    Jackoff
  </div>
</template>

<style scoped>
</style>
