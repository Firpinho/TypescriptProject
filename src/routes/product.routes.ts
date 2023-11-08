import { Router } from "express";
import * as controller from "../controllers/product.controllers";
import { validateProductGET, validateProductPOST } from "../middlewares/validators/product.validator";


const router = Router();


router.get('/', controller.getAll);
router.post('/create', validateProductPOST, controller.create);
router.get('/:id', validateProductGET, controller.getById);
router.put('/:id', validateProductGET, validateProductPOST, controller.update);
router.delete('/:id', validateProductGET, controller.remove)

export default router;