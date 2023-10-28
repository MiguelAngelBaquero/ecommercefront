/**
 * This function returns the new order's total price
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (products) =>
  products.reduce((sum, element) => sum + element.price, 0);
