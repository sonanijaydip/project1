var express = require('express');
var router = express.Router();

var user = require('../controller/usercontroller')

/* login register api */
router.post('/register', user.register_user)
router.post('/login', user.login_user)
router.post('/logout', user.logout_user)
router.get('/alluser', user.alluser)
router.post('/delete/:id', user.delete_user)
router.post('/update/:id', user.update_user)

/* content */



module.exports = router;
