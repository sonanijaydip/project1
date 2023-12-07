var register_model = require('../model/usermodel')

var loginmodel = false;

exports.register_user = async (req, res) => {

     var data = await register_model.findOne({ email: req.body.email })

     if (data) {

          res.status(200).json({
               status: 'user already registered'
          });
     }

     else {

          var data = await register_model.create(req.body)

          res.status(200).json({
               status: 'success',
               data
          })
     }

}
exports.login_user = async (req, res) => {
     
     if (loginmodel == false) {

          var data = await register_model.find({ email: req.body.email })

          if (data.length == 1) {

               if (data[0].password == req.body.password) {
                    loginmodel = true;

                    res.status(200).json({
                         status: 'success',
                         data
                    })
               }
               else {
                    res.status(200).json({
                         status: 'check_password'
                    })
               }
          }
          else {
               res.status(200).json({
                    status: 'user not found'
               })

          }

     }
     else {
          res.status(200).json({
               status: 'user already logged in'
          })
     }
}

exports.logout_user = (req, res) => {
     loginmodel = false;

     res.status(200).json({
          status:'succesfully logged out'
     })
}

exports.alluser = async (req, res) => {
     var data = await register_model.find()

     res.status(200).json({
          status:'succesfully fetched',
          data
     })
}

exports.delete_user = async (req, res) => {

     var v_id = req.params.id

     var data = await register_model.findByIdAndDelete(v_id)

     res.status(200).json({
          status:'succesfully deleted',
          status: "delete data" + v_id
     })
    
}

exports.update_user = async (req, res) => {
     
     var v_id = req.params.id

     var data = await register_model.findByIdAndUpdate(v_id, req.body)

     res.status(200).json({
          status:'succesfully updated',
          status: "update data" + v_id
     })
}

