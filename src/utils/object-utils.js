import _ from 'lodash'

export const getLeaves = (
  obj,
  maxDepth = Infinity,
  parentPath = '',
  currentDepth = 0,
  result = [],
) => {
  if (!_.isObject(obj) || _.isArray(obj) || _.isFunction(obj)) {
    if (parentPath) {
      result.push(parentPath)
    }
    return result
  }

  if (currentDepth >= maxDepth) {
    if (parentPath) {
      result.push(parentPath)
    }
    return result
  }

  _.reduce(
    obj,
    (acc, value, key) => {
      const newPath = parentPath ? `${parentPath}.${key}` : key

      getLeaves(value, maxDepth, newPath, currentDepth + 1, result)

      return acc
    },
    {},
  )

  return result
}
