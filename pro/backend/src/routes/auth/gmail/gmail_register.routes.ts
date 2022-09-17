import {Router} from '../../../common/exportsApp'
//const passport = require("passport");
import { gmail_Get} from '../../../controller/admin/allusers.Ctrl'
//const {requireAuth} = require("../../../middleware/auth");
Router.route('/gmail/register')
.get(gmail_Get)

module.exports=Router

