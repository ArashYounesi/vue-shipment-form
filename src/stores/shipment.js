import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useShipmentStore = defineStore('shipmentForm', () => {
  const form = reactive({
    sender: {
      full_name: '',
      phone: '',
      province: '',
      postal_code: '',
      address: '',
    },
    receiver: {
      full_name: '',
      phone: '',
      province: '',
      postal_code: '',
      address: '',
    },
    parcel: {
      weight: 0,
      length: 0,
      width: 0,
      height: 0,
      note: '',
    },
  })

  function resetForm() {
    form.sender = { full_name: '', phone: '', province: '', postal_code: '', address: '' }
    form.receiver = { full_name: '', phone: '', province: '', postal_code: '', address: '' }
    form.parcel = { weight: 0, length: 0, width: 0, height: 0, note: '' }
  }

  return { form, resetForm }
})
