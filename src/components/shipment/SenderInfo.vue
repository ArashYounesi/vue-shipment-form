<template>
  <div class="space-y-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <InputText
        v-model="modelValue.full_name"
        v-bind="useFormFieldProps(v$.full_name)"
        label="نام کامل"
        placeholder="آرش یونسی"
      />
      <InputText
        v-model="modelValue.phone"
        v-bind="useFormFieldProps(v$.phone)"
        label="شماره موبایل"
        placeholder="09181234560"
      />
      <InputSelect
        v-model="modelValue.province"
        v-bind="useFormFieldProps(v$.province)"
        label="استان"
        placeholder="کردستان"
        api-url="/data/provinces.json"
      />
      <InputText
        v-model="modelValue.postal_code"
        v-bind="useFormFieldProps(v$.postal_code)"
        label="کدپستی"
        placeholder="6618112345"
      />
      <Textarea
        v-model="modelValue.address"
        v-bind="useFormFieldProps(v$.address)"
        class="col-span-2"
        label="آدرس دقیق"
        placeholder="شهرستان سنندج، میدان آزادی ....."
      />
    </div>
  </div>
</template>
<script setup>
import Textarea from '@/components/form/Textarea.vue'
import InputSelect from '@/components/form/InputSelect.vue'
import InputText from '@/components/form/InputText.vue'
import { useFormFieldProps } from '@/composables/useFormFieldProps.js'

const modelValue = defineModel()
defineProps({
  v$: Object,
})
</script>
