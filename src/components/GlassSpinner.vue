<template>
  <div
    v-if="loading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-white-900/10 backdrop-blur-[4px]"
  >
    <div
      class="animate-spin inline-block size-10 border-4 border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
      role="status"
      aria-label="loading"
    >
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
<script setup>
import { useSpinnerStore } from '@/stores/spinner'
import { storeToRefs } from 'pinia'

const spinnerStore = useSpinnerStore()
const { loading } = storeToRefs(spinnerStore)
</script>
