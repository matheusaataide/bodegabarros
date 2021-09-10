import database from '../models';
import CategoryController from '../controllers/category';

export default router => {
    const controller = CategoryController(database);

    router.get('/categories', controller.list);
    router.get('/categories/:categoryId', controller.index);
    router.post('/categories', controller.store);
    router.delete("/categories/:categoryId", controller.delete);
    router.patch('/categories/:categoryId', controller.edit);
};