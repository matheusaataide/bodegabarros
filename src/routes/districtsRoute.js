import database from '../models';
import DistrictController from '../controllers/district';

export default router => {
    const controller = DistrictController(database);

    router.get('/districts', controller.list);
    router.get('/districts/:districtId', controller.index);
    router.post('/districts', controller.store);
    router.delete("/districts/:districtId", controller.delete);
    router.patch('/districts/:districtId', controller.edit);
};