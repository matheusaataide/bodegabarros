import httpStatus from 'http-status';

const DistrictController = database => ({
    // Listar todos os bairros cadastrados, com endereços cadastrados neles
    list: async (req, res) => {
        try {
            const list = await database.district.findAndCountAll({
                distinct: true,
                order: [
                    ['name', 'ASC'],
                    [{ model: database.address, as: 'addresses' }, 'addressId', 'ASC']
                ],
                include: [{
                    model: database.address,
                    as: 'addresses',
                    include: [{ model: database.client }]
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

    // Recuperar um bairro pelo ID 
    index: async (req, res) => {
        try {
            const district = await database.district.findOne({
                where: { ...req.params },
                include: [{
                    model: database.address,
                    as: 'addresses',
                    include: [{ model: database.client }]
                }]
            });
            return res
                .status(httpStatus.OK)
                .json(district);
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
    
    // Salvar novos bairros
    store: async (req, res) => {
        try {
            const district = await database.district.bulkCreate(req.body);

            return res
                .status(httpStatus.CREATED)
                .json(district);
        } catch (err) {
            console.error(err.stack);
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    error: true,
                    content: err
                });
        }
    },
    
    
    delete: async (req, res) => {
        try {
            const deleted = await database.district.destroy({
                where: { ...req.params }
            });

            return res
                .status(httpStatus.OK)
                .json(deleted);
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


    edit: async (req, res) => {
        try {
            const district = await database.district.update(
                req.body, {
                where: { ...req.params }
            }
            );

            return res
                .status(httpStatus.OK)
                .json(district);
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

export default DistrictController;