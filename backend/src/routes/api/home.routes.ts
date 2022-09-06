import {Router} from '../../common/exApp'
import { home_Get,home_Post,home_Put,home_delete } from '../../controller/home.Ctrl'
const {requireAuth} = require("../../middleware/auth");
Router.route('/home')
.get(requireAuth,home_Get)
module.exports=Router