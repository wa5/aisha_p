import {Router} from '../../common/exApp'
import { new_user_register_Post, register_Get } from '../../controller/loginUser/new_user_register.Ctrl'


Router.route('/register') 
.get(register_Get).post(new_user_register_Post)
module.exports=Router 