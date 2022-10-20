import {Router} from '../../../common/exportsApp'
const passport = require("passport");
import { uploadProducts_Post} from '../../../controller/seller/products/uploadProducts.Ctrl'
//const {requireAuth} = require("../../../middleware/auth");
Router.route('/upload-products')
.post(uploadProducts_Post)

module.exports=Router