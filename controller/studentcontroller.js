var student = require('../model/studentmodel');

exports.add_student = async (req, res) => {
    var data = await student.create(req, body)

    res.status(200).json({
        status: 'success',
        data
    })
}