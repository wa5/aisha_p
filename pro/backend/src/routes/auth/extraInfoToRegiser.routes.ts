import {Router} from '../../common/exportsApp'
const passport = require("passport");
import { extraInfoToRegiser_Get} from '../../controller/auth/extraInfoToRegiser.Ctrl'
//const {requireAuth} = require("../../../middleware/auth");
Router.route('/extrainfocheck/:id')
.get(extraInfoToRegiser_Get)

module.exports=Router