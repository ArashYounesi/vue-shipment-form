<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-md"
  >
    <div
      class="flex flex-col items-center bg-white/30 backdrop-blur-xl shadow-sm rounded-3xl py-16 px-24 border-b-6 border-b-gray-200"
    >
      <svg
        class="w-20 h-20 text-green-500 animate-bounce"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>

      <h2 class="mt-4 text-2xl font-semibold text-green-600">ارسال موفق !</h2>
      <p class="mt-2 text-gray-700">اطلاعات مرسوله با موفقیت شد.</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})
</script>
