<template>
  <GlassSpinner />
  <RouterView />
</template>
<script setup>
import GlassSpinner from '@/components/GlassSpinner.vue'
import { onMounted } from 'vue'
import { useSpinnerStore } from '@/stores/spinner.js'

onMounted(() => {
  useSpinnerStore().show()

  setTimeout(() => {
    useSpinnerStore().hide()
  }, 1000)
})
</script>
