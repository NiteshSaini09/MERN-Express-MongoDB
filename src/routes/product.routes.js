import { Router } from "express";
import * as productController from "../controllers/product.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router=Router()

router.route('/').get(productController.home)
router.route('/add').post(verifyJWT,productController.productAdd)
router.route('/read').get(productController.productReadAll)
router.route('/read/:id').post(productController.productReadOne)
router.route('/update/:id').patch(productController.productUpdate)
router.route('/delete/:id').delete(productController.productDelete)
router.route('/my-products').get(verifyJWT,productController.myProducts)

//-------------product image -------------

router.route('/product-image').post(upload.fields([{name:'productImage',maxCount:1}]),productController.productImage)


export default router