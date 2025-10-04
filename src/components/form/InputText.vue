<template>
  <div>
    <label class="block text-sm font-medium mb-2">{{ label }}</label>
    <div class="relative">
      <input
        v-bind="$attrs"
        class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none placeholder:text-gray-400 placeholder:text-[0.8rem]"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />

      <div
        v-if="invalid"
        class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
      >
        <ErrorIcon />
      </div>
    </div>
    <p v-if="invalid" class="text-[0.8rem] text-red-600 mt-1">{{ errors[0].$message }}</p>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'

const props = defineProps({
  label: String,
  type: { type: String, default: 'text' },
  modelValue: String,
  errors: Array
})

defineEmits(['update:modelValue'])

const invalid = computed(() => props.errors?.length > 0)
</script>
