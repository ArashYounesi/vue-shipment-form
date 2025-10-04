<template>
  <div>
    <label class="block text-sm font-medium mb-2">{{ label }}</label>
    <!-- SearchBox -->
    <div class="relative" ref="comboRef" :data-hs-combo-box="comboBoxConfig">
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
          <SearchIcon />
        </div>
        <input
          v-bind="$attrs"
          class="py-2.5 py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          type="text"
          role="combobox"
          aria-expanded="false"
          :value="modelValue"
          data-hs-combo-box-input=""
        />
      </div>

      <!-- SearchBox Dropdown -->
      <div
        class="absolute z-50 w-full bg-white border border-gray-200 rounded-lg"
        style="display: none"
        data-hs-combo-box-output=""
      >
        <div
          class="max-h-72 rounded-b-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
          data-hs-combo-box-output-items-wrapper=""
        ></div>
      </div>
      <!-- End SearchBox Dropdown -->

      <div
        v-if="invalid"
        class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
      >
        <ErrorIcon />
      </div>
    </div>
    <!-- End SearchBox -->

    <p v-if="invalid" class="text-[0.8rem] text-red-600 mt-1">{{ errors[0].$message }}</p>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'

const props = defineProps({
  label: String,
  modelValue: String,
  errors: Array,
  apiUrl: String,
})

const emit = defineEmits(['update:modelValue'])

const invalid = computed(() => props.errors?.length > 0)
const comboBoxConfig = computed(() => {
  const config = {
    groupingType: 'none',
    isOpenOnFocus: true,
    apiUrl: props.apiUrl,
    outputItemTemplate:
      '<div data-hs-combo-box-output-item><span class="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"><div class="flex items-center w-full"><div data-hs-combo-box-output-item-field="name" data-hs-combo-box-value></div><div class="hidden" data-hs-combo-box-output-item-field=\'["name","category"]\' data-hs-combo-box-search-text></div></div><span class="hidden hs-combo-box-selected:block"><svg class="shrink-0 size-3.5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span></span></div>',
  }

  return JSON.stringify(config)
})

const comboRef = ref(null)
let instance = null

onMounted(() => {
  setTimeout(() => window.HSStaticMethods.autoInit(), 100)
  setTimeout(async () => {
    instance = window.HSComboBox.getInstance(comboRef.value)
    if (!instance) return

    if (!props.modelValue) emit('update:modelValue', instance.getCurrentData()?.value || '')
    instance.on('select', (data) => {
      emit('update:modelValue', data?.name || '')
    })
  }, 160)
})
</script>
