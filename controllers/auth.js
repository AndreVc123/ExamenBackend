const {usuarios} = require('../models');

const login = async(req, res) => {

    const body = req.body;
    console.log(body)

    await usuarios.findOne({
        where: {
            email: body.email,
            password: body.password
        }
    }).then(result => {

        res.status(200).json({
            ok:true,
            msg:true
        })
    })
    .catch(err => {
        res.status(404).json({
            ok:false,
            err
        })
    })

}


module.exports = {
    login
}