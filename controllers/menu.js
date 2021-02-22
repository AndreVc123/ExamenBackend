const {menu} = require('../models');


const opciones = async(req, res) => {
    await menu.findAll({})
            .then(opciones => {
                res.status(200).json({
                    ok:true,
                    opciones
                })
            })
            .cath( err => {
                res.status(404).json({
                    ok:false,
                    err
                })
            })

}


module.exports = {
    opciones
}