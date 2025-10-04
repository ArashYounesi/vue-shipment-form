export function useMaxMinProps(field) {
  const props = {}

  if (field?.maxLength) props.maxlength = field.maxLength.$params?.max
  if (field?.minLength) props.minlength = field.minLength.$params?.min

  if (field?.maxValue) props.max = field.maxValue.$params?.max
  if (field?.minValue) props.min = field.minValue.$params?.min

  return props
}
