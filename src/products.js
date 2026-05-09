// products.js — Módulo de gestión de productos (CORREGIDO)
const products = [
  { id: 1, name: 'Laptop HP', price: 2500 },
  { id: 2, name: 'Mouse Logitech', price: 45 },
  { id: 3, name: 'Teclado Mecánico', price: 120 },
  { id: 4, name: 'Monitor LG', price: 850 },
];

/**
 * Busca un producto por su ID.
 * @param {number} id - Identificador del producto
 * @returns {object|null} El producto o null si no existe
 */
function getProductById(id) {
  return products.find(p => p.id === id) ?? null;
}

/**
 * Calcula el precio con descuento.
 * @param {object} product - Producto con propiedad price
 * @param {number} discount - Descuento entre 0 y 1
 * @returns {number} Precio final
 */
function calculateDiscount(product, discount) {
  if (!product || product.price === null || product.price < 0) {
    throw new Error('Precio inválido');
  }
  const finalPrice = product.price - (product.price * discount);
  return finalPrice;
}

/**
 * Filtra productos por precio mínimo.
 * @param {number} minPrice - Precio mínimo de filtro
 * @returns {Array} Lista de productos que superan el precio mínimo
 */
function filterExpensive(minPrice) {
  return products.filter(p => p.price > minPrice);
}

module.exports = { getProductById, calculateDiscount, filterExpensive };