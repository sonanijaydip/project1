var express = require('express');
var router = express.Router();

var user = require('../controller/studentcontroller')

router.post('/addstudent', user.add_student);
// router.get('/', user.find_faculty);
// router.post('/update/:id', user.update_faculty);
// router.post('/delete/:id', user.delete_faculty);

module.exports = router;