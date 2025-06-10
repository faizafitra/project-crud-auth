const db = require('../config/db');  // Koneksi ke database

const Product = {
  // Ambil semua produk
  getAllProducts: (callback) => {
    db.query('SELECT * FROM products', callback);
  },

  // Ambil produk berdasarkan ID
  getProductById: (id, callback) => {
    db.query('SELECT * FROM products WHERE id = ?', [id], callback);
  },

  // Tambah produk baru (umum)
  createProduct: (productData, callback) => {
    db.query('INSERT INTO products SET ?', productData, callback);
  },

  // Update produk
  // updateProduct: (id, productData, callback) => {
  //   db.query('UPDATE products SET ? WHERE id = ?', [productData, id], callback);
  // },

  // Update produk berdasarkan ID
updateProduct: (id, productData, callback) => {
  if (!id) {
    return callback(new Error('Product ID is required'), null);
  }
  if (!productData.name || !productData.price) {
    return callback(new Error('Product name and price are required'), null);
  }

  const query = 'UPDATE products SET name = ?, price = ? WHERE id = ?';
  const values = [productData.name, productData.price, id];

  db.query(query, values, callback);
},

  // Hapus produk
  deleteProduct: (id, callback) => {
    db.query('DELETE FROM products WHERE id = ?', [id], callback);
  },

  // Ambil produk populer
  getPopularProducts: (callback) => {
    db.query('SELECT * FROM products WHERE is_popular = 1', callback);
  },

  // Tambah produk populer
  createPopularProduct: (productData, callback) => {
    db.query('INSERT INTO products SET ?', productData, callback);
  },

  // Update produk populer
  updatePopularProduct: (id, productData, callback) => {
    const query = 'UPDATE products SET is_popular = ? WHERE id = ?';
    const values = [productData.is_popular, id];
  
    db.query(query, values, callback);
  },   
};

module.exports = Product;
