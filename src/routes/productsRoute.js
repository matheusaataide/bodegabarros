import database from '../models';
import ProductController from '../controllers/product';
import OptionController from '../controllers/option';

export default router => {
    const productCtrl = ProductController(database);
    const optionCtrl = OptionController(database);

    router.get('/products', productCtrl.list);
    router.get("/products/:productId", productCtrl.index);
    router.post('/products', productCtrl.store);
    router.delete("/products/:productId", productCtrl.delete);
    router.patch('/products/:productId', productCtrl.edit);

    router.post('/products/:productId/options', optionCtrl.store);
    router.delete('/products/:productId/options/:optionId', optionCtrl.delete);
    router.patch('/products/:productId/options/:optionId', optionCtrl.edit);
};