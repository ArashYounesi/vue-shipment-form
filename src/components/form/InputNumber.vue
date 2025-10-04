<template>
  <div>
    <label class="block text-sm font-medium mb-2">{{ label }}</label>
    <div
      class="relative py-2 px-3 bg-white border border-gray-200 rounded-lg"
    >
      <div class="w-full flex justify-between items-center gap-x-5">
        <div class="grow">
          <input
            v-bind="$attrs"
            class="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            style="-moz-appearance: textfield"
            type="number"
            aria-roledescription="Number field"
            :disabled="disabled"
            :min="min"
            :max="max"
            :value="modelValue"
            @input="value = $event.target.value"
          />
        </div>
        <div class="flex justify-end items-center gap-x-1.5">
          <button
            type="button"
            class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            tabindex="-1"
            aria-label="Decrease"
            :disabled="isDecrementDisabled"
            @click="decrement"
          >
            <DecrementIcon />
          </button>
          <button
            type="button"
            class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            tabindex="-1"
            aria-label="Increase"
            :disabled="isIncrementDisabled"
            @click="increment"
          >
            <IncrementIcon />
          </button>
        </div>
      </div>
      <div
        v-if="invalid"
        class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3 me-16"
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
import IncrementIcon from '@/components/icons/IncrementIcon.vue'
import DecrementIcon from '@/components/icons/DecrementIcon.vue'

const props = defineProps({
  label: String,
  modelValue: { type: Number, default: 0 },
  errors: Array,
  disabled: Boolean,
  min: { type: Number, default: 0 },
  max: { type: Number, default: Infinity },
})

const emit = defineEmits(['update:modelValue'])
const invalid = computed(() => props.errors?.length > 0)

const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', Number(val))
  },
})
const isDecrementDisabled = computed(() =>  value.value <= props.min)
const isIncrementDisabled = computed(() =>  value.value >= props.max)

const increment = () => {
  value.value += 1
}

const decrement = () => {
  value.value -= 1
}
</script>
