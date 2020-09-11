export default (value: string) => {
  if (value.trim() === '' || !/^\w+\/(\w+\-*)+$/.test(value)) {
    return false;
  }
  return true;
};
