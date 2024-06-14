import { Router } from 'express';
import { DocsController } from '@controllers/DocsController';
import { CustomerController } from '@controllers/CustomerController';
import { ContactController } from '@controllers/ContactController';

const routes = Router();

routes
.get('/', DocsController.docs)
.get('/customer/:customerId', CustomerController.getCustomerById)
.get('/customer', CustomerController.read)
.post('/customer', CustomerController.create)
.post('/customer/:id', CustomerController.update)
.delete('/customer/:id', CustomerController.delete)
.get('/contact/:contactId', ContactController.getContactById)
.get('/contact', ContactController.read)
.post('/contact', ContactController.create)
.post('/contact/:contactId', ContactController.update)
.delete('/contact/:contactId', ContactController.delete);


export { routes };