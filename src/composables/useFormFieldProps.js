import { useMaxMinProps } from '@/composables/useMaxMinProps.js'

export function useFormFieldProps(vField) {
  const props = {}

  props.errors = vField.$errors || []
  Object.assign(props, useMaxMinProps(vField))

  return props
}
