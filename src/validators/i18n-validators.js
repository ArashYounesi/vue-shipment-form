import * as validators from '@vuelidate/validators'
import { i18n } from '@/utils/i18n.js'
import * as iranianValidators from './iranian-validators';

const customT = (key, params) => {
  const { validator, property } = params
  const validatorName = validator

  const fieldName = i18n.global.t(`fields.${property}`)
  const translationParams = {
    field: fieldName,
    ...params,
  }

  return i18n.global.t(`validations.${validatorName}`, translationParams)
}

const { createI18nMessage } = validators
const withI18nMessage = createI18nMessage({ t: customT })

// wrap each validator.
export const required = withI18nMessage(validators.required)
export const minLength = withI18nMessage(validators.minLength, { withArguments: true })
export const maxLength = withI18nMessage(validators.maxLength, { withArguments: true })
export const numeric = withI18nMessage(validators.numeric)
export const minValue = withI18nMessage(validators.minValue, { withArguments: true })
export const maxValue = withI18nMessage(validators.maxValue, { withArguments: true })
export const iranianMobile = withI18nMessage(iranianValidators.iranianMobile);
export const iranianPostalCode = withI18nMessage(iranianValidators.iranianPostalCode);
