const routes = require('express').Router();
const buku = require('../controllers/bookControls');
const customer = require('../controllers/customerControls');
const transaction = require('../controllers/transactionControls')



//create
routes.post('/books', buku.tambahBuku);
routes.post('/customers', customer.createCustomer);
routes.post('/transactions', transaction.createTransaction);

//read
routes.get('/books', buku.tampilBuku);
routes.get('/customers', customer.readCustomer);
routes.get('/transactions', transaction.readTransaction);

//update
routes.put('/books/:id', buku.updateBuku);
routes.put('/customers/:id', customer.updateCustomer);
routes.put('/transactions/:id', transaction.updateTransaction);

//delete
routes.delete('/books/:id', buku.deleteBuku);
routes.delete('/customers/:id', customer.deleteCustomer);
routes.delete('/transactions/:id', transaction.deleteTransaction);



module.exports = routes;

