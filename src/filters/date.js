export default (value) => {
  const date = new Date(value);
  return date.toLocaleDateString(['en-GB'], { });
  // if you want, you can change locale date string
};
