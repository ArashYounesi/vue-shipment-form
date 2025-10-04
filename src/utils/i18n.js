import { createI18n } from 'vue-i18n'

import validations from '@/lang/fa/validations.json'
import fields from '@/lang/fa/fields.json'

export const i18n = createI18n({
  locale: 'fa',
  fallbackLocale: 'fa',
  messages: {
    fa: { validations, fields },
  },
})
