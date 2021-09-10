import httpStatus from 'http-status';

const AddressController = database => ({
    list: async (req, res) => {
        try {
            const list = await database.address.findAndCountAll({
                distinct: true,
                where: { ...req.params },
                order: [
                    ['addressId', 'ASC']
                ],
                include: [{
                    model: database.address,
                    as: 'addresses',
                    include: [{ model: database.district }]
                }]
            });
            return res
                .status(httpStatus.OK)
                .json(list);
        } catch (err) {
            console.error(err.stack);
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    error: true,
                    content: err.stack
                });
        }
    },
    store: async (req, res) => {
        try {

            let addresses = req.body;

            addresses.forEach(addr => {
                addr.clientId = req.params.clientId;
            });

            const address = await database.address.bulkCreate(addresses);

            return res
                    .status(httpStatus.CREATED)
                    .json(address);
        } catch (err) {
            console.error(err.stack);
            return res
                    .status(httpStatus.INTERNAL_SERVER_ERROR)
                    .json({
                        error: true,
                        content: err.stack
                    });
        }
    },
    delete: async (req, res) => {
        try {
            const dropped = await database.address.destroy({
                where: { ...req.params }
            });

            return res
                    .status(httpStatus.OK)
                    .json(dropped);
        } catch (err) {
            console.error(err.stack);
            return res
                    .status(httpStatus.INTERNAL_SERVER_ERROR)
                    .json({
                        error: true,
                        content: err.stack
                    });
        }
    }
});

export default AddressController; 