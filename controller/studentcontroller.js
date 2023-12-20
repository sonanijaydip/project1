var student = require('../model/studentmodel');

exports.add_student = async (req, res) => {

    req.body.image = req.file.originalname;
    
    var data = await student.create(req.body)

    res.status(200).json({
        status: 'success',
        data
    })
}

exports.find_student = async (req, res) => {
    var v_id = req.params.id;
    // var name = req.params.name;
    // var contact_number = req.params.contact_number;

    var data = await student.findById(v_id).populate('content_id')
    console.log('id', data);

    res.status(200).json({
        status: 'success',
        data
    })

}

// exports.find_student = async (req, res) => {
//     var v_id = req.params.id;
//     var name = req.params.name;
//     var contact_number = req.params.contact_number;

//     var data = await student.find({id: v_id},{name: name},{contact_number: contact_number})
//     console.log('id', data);

//     res.status(200).json({
//         status: 'success',
//         data
//     })
// }

exports.delete_student = async (req, res) => {
    v_id = req.params.id

    var data = await student.findByIdAndDelete(v_id)

    res.status(200).json({
        status:'delete successfully'
    })
}

exports.update_student = async (req, res) => {
    v_id = req.params.id

    var data = await student.findByIdAndUpdate(v_id, req.body)

    res.status(200).json({
        status:'updated successfully',
    })
}
