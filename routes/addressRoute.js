// module.exports = router;
const express = require('express');
const router = express.Router();
const shippingAddressController = require('../controller/addressController');
const { authGuard } = require('../middleware/auth');

// Create or Update Shipping Address
router.post('/shipping-address', shippingAddressController.createShippingAddress);
router.put('/update-shipping-address/:addressId', shippingAddressController.updateShippingAddress);
router.get('/getaddress/:userId', authGuard, shippingAddressController.getAllShippingAddresses);
router.delete('/deleteaddress/:addressId', authGuard, shippingAddressController.deleteAddress);
router.get('/getaddressbyaddressId/:addressId', authGuard, shippingAddressController.getShippingAddressById);

module.exports = router;