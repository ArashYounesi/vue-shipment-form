import {
  required,
  minLength,
  numeric,
  minValue,
  maxValue,
  iranianMobile,
  iranianPostalCode,
  maxLength,
} from '@/validators/i18n-validators.js'

export const shipmentRules = {
  sender: {
    full_name: { required, minLength: minLength(3), maxLength: maxLength(40) },
    phone: { required, numeric, iranianMobile, maxLength: maxLength(11) },
    province: { required },
    postal_code: { required, numeric, iranianPostalCode, maxLength: maxLength(10) },
    address: { required, minLength: minLength(5), maxLength: maxLength(150) },
  },
  receiver: {
    full_name: { required, minLength: minLength(3), maxLength: maxLength(40) },
    phone: { required, numeric, iranianMobile, maxLength: maxLength(11) },
    province: { required },
    postal_code: { required, numeric, iranianPostalCode, maxLength: maxLength(10) },
    address: { required, minLength: minLength(5), maxLength: maxLength(150) },
  },
  parcel: {
    weight: { required, numeric, minValue: minValue(10), maxValue: maxValue(25000) },
    length: { required, numeric, minValue: minValue(5), maxValue: maxValue(100) },
    width: { required, numeric, minValue: minValue(5), maxValue: maxValue(100) },
    height: { required, numeric, minValue: minValue(2), maxValue: maxValue(100) },
    note: {},
  },
}
