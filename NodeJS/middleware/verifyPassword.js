const passwordSchema = require('../models/passwords');

module.exports = (req, res, next) => {
    if(!passwordSchema.validate(req.body.password)){
        return res.status(400).json({error: "low security of password! " + passwordSchema.validate(req.body.password, {list:true})})
    }else{
        next();
    }
}