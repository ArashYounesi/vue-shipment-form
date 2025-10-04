<template>
  <div class="space-y-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <InputNumber
        v-model="modelValue.weight"
        v-bind="useFormFieldProps(v$.weight)"
        label="وزن بسته (گرم)"
        placeholder="1500"
      />
      <InputNumber
        v-model="modelValue.length"
        v-bind="useFormFieldProps(v$.length)"
        label="طول بسته (cm)"
        placeholder="15"
      />
      <InputNumber
        v-model="modelValue.width"
        v-bind="useFormFieldProps(v$.width)"
        label="عرض بسته (cm)"
        placeholder="15"
      />
      <InputNumber
        v-model="modelValue.height"
        v-bind="useFormFieldProps(v$.height)"
        label="ارتفاع بسته (cm)"
        placeholder="15"
      />
      <Textarea
        v-model="modelValue.note"
        v-bind="useFormFieldProps(v$.note)"
        class="col-span-2"
        label="توضیحات"
        placeholder="لطفا پستچی قبل از رسیدن تماس بگیرد ..."
      />
    </div>
  </div>
</template>
<script setup>
import Textarea from '@/components/form/Textarea.vue'
import InputNumber from '@/components/form/InputNumber.vue'
import { useFormFieldProps } from '@/composables/useFormFieldProps.js'

const modelValue = defineModel()
defineProps({
  v$: Object,
})
</script>
