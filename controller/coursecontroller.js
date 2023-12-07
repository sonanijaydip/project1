var course = require('../model/coursemodel')

exports.add_course = async (req, res) => {

     var data = await course.create(req.body)

     res.status(200).json({
          status:'succesfully added',
          data
     })
}

    exports.select_course = async (req, res) => {
     
     var id = req.params.id;

         var data = await course.findById(id).populate("content_id");
         
         res.status(200).json({
              status:'view all courses',
              data
         })
}

exports.delete_course = async (req, res) => {
     v_id = req.params.id
     var data = await course.findByIdAndDelete(v_id)
     console.log('delete course', data);
     
     res.status(200).json({
          status:'succesfully deleted',
          data
     })
}

exports.update_course = async (req, res) => {
     v_id = req.params.id
     
     var data = await course.findByIdAndUpdate(v_id, req.body)
     
     res.status(200).json({
          status:'succesfully updated',

     })
}