import {Router} from '../../common/exApp'
import { User_Get } from '../../controller/user/user.Ctrl'

Router.route('/getusers')
.get(User_Get)
module.exports=Router