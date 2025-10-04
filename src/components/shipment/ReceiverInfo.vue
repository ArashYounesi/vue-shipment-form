<template>
  <div class="space-y-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <InputText
        v-model="modelValue.full_name"
        v-bind="useFormFieldProps(v$.full_name)"
        label="نام کامل"
        placeholder="پدرام اسدزاده"
      />
      <InputText
        v-model="modelValue.phone"
        v-bind="useFormFieldProps(v$.phone)"
        label="شماره موبایل"
        placeholder="09121234560"
      />
      <InputSelect
        key="step-2"
        v-model="modelValue.province"
        v-bind="useFormFieldProps(v$.province)"
        label="استان"
        placeholder="تهران"
        api-url="/data/provinces.json"
      />
      <InputText
        v-model="modelValue.postal_code"
        v-bind="useFormFieldProps(v$.postal_code)"
        label="کدپستی"
        placeholder="1969612345"
      />
      <Textarea
        v-model="modelValue.address"
        v-bind="useFormFieldProps(v$.address)"
        class="col-span-2"
        label="آدرس دقیق"
        placeholder="تهران، داشنگاه خواجه نصیر ....."
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
