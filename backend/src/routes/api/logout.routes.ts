import {Router} from '../../common/exApp'
import { Logout_Get} from '../../controller/logout.Ctrl'

Router.route('/logout')
.get(Logout_Get)
module.exports=Router