import database from '../models';
import ClientController from '../controllers/client';
import AddressController from '../controllers/address';

export default router => {
    const clientCtrl = ClientController(database);
    const addressCtrl = AddressController(database);

    router.get('/clients', clientCtrl.list);
    router.get('/clients/:clientId', clientCtrl.index);
    router.post('/clients', clientCtrl.store);
    router.delete("/clients/:clientId", clientCtrl.delete);
    router.patch('/clients/:clientId', clientCtrl.edit);

    router.get('/clients/:clientId/addresses', addressCtrl.list);
    router.post('/clients/:clientId/addresses', addressCtrl.store);
    router.delete('/clients/:clientId/addresses/:addressId', addressCtrl.delete);

    router.post('/clients/:clientId/score', clientCtrl.increaseScore);
    router.delete('/clients/:clientId/score', clientCtrl.resetScore);
};