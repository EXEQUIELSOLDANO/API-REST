const passport=require('passport');
const passportStrategy=require('../auth/passport-config');

function initializeAuthentication(){
    passport.use(passportStrategy)
}
module.exports={initializeAuthentication};