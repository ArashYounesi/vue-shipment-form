<template>
  <head>
    <title>Shipment Form</title>
  </head>

  <div class="min-h-screen flex justify-center py-10 bg-gray-100">
    <div class="w-full max-w-5xl py-4 px-8">
      <!-- TopBar -->
      <div class="bg-white rounded-xl px-5 py-4 border-b-3 border-b-gray-200 pb-4 mb-4">
        <div class="text-xs font-bold text-gray-500 uppercase mb-1 font-yekanbakh">
          قدم: {{ step }} از 3
        </div>
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-lg text-gray-700 font-yekanbakh">{{ titles[step - 1] }}</h3>
          <div class="flex items-center space-x-2">
            <div class="w-40 bg-gray-200 rounded-full">
              <div
                class="h-2 rounded-full bg-green-500 transition-width delay-100 duration-300 ease-out"
                :style="{ width: progress + '%' }"
              ></div>
            </div>
            <span class="text-xs text-gray-600">{{ progress }}%</span>
          </div>
        </div>
      </div>

      <!-- Multistep Form-->
      <div
        class="bg-white rounded-xl px-8 py-6 border-b-5 border-b-gray-200 shadow-md shadow-gray-250"
      >
        <!-- Steps -->
        <div class="space-y-8">
          <!-- Step 1 -->
          <SenderInfo v-if="step === 1" v-model="shipmentStore.form.sender" :v$="v$.sender" />
          <!-- Step 2 -->
          <ReceiverInfo v-if="step === 2" v-model="shipmentStore.form.receiver" :v$="v$.receiver" />
          <!-- Step 3 -->
          <ParcelInfo v-if="step === 3" v-model="shipmentStore.form.parcel" :v$="v$.parcel" />
        </div>
      </div>

      <!--  BottomBar-->
      <div v-if="step !== 'complete'" class="mt-8 flex justify-between">
        <button
          v-if="step > 1"
          class="cursor-pointer px-5 py-2 rounded-lg border bg-white hover:bg-gray-100 text-gray-600 font-medium"
          @click="prevStep"
        >
          قدم قبلی
        </button>
        <div class="ms-auto space-x-2">
          <button
            type="button"
            class="cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent focus:outline-hidden text-white"
            :class="{
              'opacity-50 !cursor-not-allowed': !currentStepValid,
              'bg-blue-600 hover:bg-blue-700 focus:bg-blue-700': !isLastStep,
              'bg-green-500 hover:bg-green-600 focus:bg-green-600': isLastStep,
            }"
            @click="nextStep"
          >
            {{ isLastStep ? 'ثبت مرسوله' : 'قدم بعدی' }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <SuccessOverlay :visible="completed" />
</template>

<script setup>
import { computed, ref } from 'vue'
import _ from 'lodash'
import SenderInfo from '@/components/shipment/SenderInfo.vue'
import ReceiverInfo from '@/components/shipment/ReceiverInfo.vue'
import ParcelInfo from '@/components/shipment/ParcelInfo.vue'
import useVuelidate from '@vuelidate/core'
import { useShipmentStore } from '@/stores/shipment.js'
import { shipmentRules } from '@/validation-rules/shipment-rules'
import { getLeaves } from '@/utils/object-utils.js'
import { useSpinnerStore } from '@/stores/spinner.js'
import SuccessOverlay from '@/components/SuccessOverlay.vue'

const shipmentStore = useShipmentStore()
const v$ = useVuelidate(shipmentRules, shipmentStore.form)

const step = ref(1)
const completed = ref(false)
const isLastStep = computed(() => step.value === 3)
const progress = computed(() => {
  const leaves = getLeaves(shipmentRules, 2)
  let totalFields = leaves.length
  let validFields = 0

  if (totalFields === 0) {
    return 0
  }

  for (const path of leaves) {
    const validationObject = _.get(v$.value, path)
    if (validationObject) {
      const isRequired = !!validationObject.required
      if (!isRequired) {
        totalFields--
        continue
      }
      if (!validationObject.$invalid) validFields++
    }
  }

  return Math.round((validFields / totalFields) * 100)
})

const titles = ['اطلاعات فرستنده', 'اطلاعات گیرنده', 'مشخصات بسته']
const currentStepValid = computed(() => {
  let currentValidator

  if (step.value === 1) {
    currentValidator = v$.value.sender
  } else if (step.value === 2) {
    currentValidator = v$.value.receiver
  } else if (step.value === 3) {
    currentValidator = v$.value.parcel
  } else {
    return !v$.value.$invalid
  }

  return !currentValidator.$invalid
})

function nextStep() {
  let currentValidator

  if (step.value === 1) currentValidator = v$.value.sender
  else if (step.value === 2) currentValidator = v$.value.receiver
  else if (step.value === 3) currentValidator = v$.value.parcel
  else return

  currentValidator.$touch()

  if (currentValidator.$invalid) {
    return
  }

  if (!isLastStep.value) {
    step.value = step.value + 1
  } else {
    submitForm()
  }
}
function prevStep() {
  step.value = Math.max(step.value - 1, 1)
}
function submitForm() {
  v$.value.$touch()
  if (v$.value.$invalid) {
    return
  }

  useSpinnerStore().show()

  setTimeout(() => {
    useSpinnerStore().hide()
    completed.value = true
  }, 1500)
}
</script>
