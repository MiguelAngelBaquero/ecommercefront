/**
 * This function returns the new order's total price
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (products) =>
  products.reduce((sum, element) => sum + element.price * element.quantity, 0);

/**
 * This function helps to store the current date and time in UTC format
 * @returns {string} current date UTC format
 */
export const getCurrentDate = () => {
  const now = new Date();
  return now.toUTCString();
};

/**
 * This function converts UTC time to Locale time
 * @param {string} utcDate
 * @returns {string} 12/31/1994
 */
export const formatDate = (utcDate) => {
  const date = new Date(utcDate);
  let hours = date.getHours(),
    minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes;
  return (
    date.getMonth() +
    1 +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    "  " +
    strTime
  );
};
