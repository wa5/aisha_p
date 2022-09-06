import {Router} from '../../common/exApp'
import { Login_Get,login_Post } from '../../controller/login.Ctrl'

Router.route('/login')
.get(Login_Get).post(login_Post)
module.exports=Router