const bcrypt = require('bcrypt'),
      {user} = require('../models')

var middlewareObj = {};

/**
 * using bcrypt to verify password
 * @param String password, String hashedPassword
 * @return Boolean
 */
middlewareObj.isValidPassword = (password, hashedPassword) => {
    try {

        return bcrypt.compare(password, hashedPassword);
    } catch (error) {
        throw new Error(error);
    }

}

/**
 * verify duplicate email, database will throw error because email field is unique 
 * @param Obejct req, Object res, function next()
 * @return promise<object>
 */
middlewareObj.isUserExist = (req,res,next) => {
    user.find({where:{email:req.body.email}}).then((userExist)=>{
        if(userExist){
            res.send("email already exist");
        }else{
            next();
        }
    }).catch((error)=>{
        res.status(500).send('Internal Server Error');
    })
}

/**
 * check allowance from users table before posting a post
 * @param string userId
 * @return string allowance - in database its datatype is integer but it will throw json
 */
middlewareObj.checkAllowance = ()=>{

};

/**
 * check if user is the owner of post, before update or delete on post
 * @param 
 * @return 
 */
middlewareObj.isOwnerOfPost = (req,res,next)=>{
    next();
    };

module.exports = middlewareObj;