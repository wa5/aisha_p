
import {Router} from '../common/exApp'
import { Login_Get } from '../controller/login.Ctrl'

Router.route('/')
.post(authController.handleLogin)
module.exports=Router
