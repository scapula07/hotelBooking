const express = require('express');


const {getClientSecret} = require('../controllers/Controller');



const router = express.Router();

router.route('/get-secret').get(getClientSecret);



module.exports = router