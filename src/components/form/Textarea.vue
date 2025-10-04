<template>
  <div>
    <label class="block text-sm font-medium mb-2">{{ label }}</label>
    <div class="relative">
      <textarea
        v-bind="$attrs"
        class="py-2 px-3 sm:py-3 sm:px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        rows="4"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      ></textarea>

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
  placeholder: String,
  modelValue: String,
  errors: Array,
  disabled: Boolean,
})

defineEmits(['update:modelValue'])

const invalid = computed(() => props.errors?.length > 0)
</script>
