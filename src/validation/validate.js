export default value => {
  if (value.trim() === '' || !/^\w+\/(\w+\-*)+$/.test(value))
    return false
  return true
}