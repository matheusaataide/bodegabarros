import { Sequelize } from '../models';
import httpStatus from 'http-status';

const ClientController = database => ({
    // List all clients, including address within those categories
    list: async (req, res) => {
        try {
            const list = await database.client.findAndCountAll({
                distinct: true,
                order: [
                    ['name', 'ASC'],
                    ['phone', 'ASC'],
                    [{ model: database.address, as: 'addresses' }, 'addressId', 'ASC']
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

    // Get a instance of client, by id
    index: async (req, res) => {
        try {
            const client = await database.client.findOne({
                where: { ...req.params },
                include: [{
                    model: database.address,
                    include: [{ model: database.district }]
                }]
            });
            return res
                .status(httpStatus.OK)
                .json(client);
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
    
    // Salvar novos clientes
    store: async (req, res) => {
        try {
            const client = await database.client.bulkCreate(req.body, {
                include: [{
                    model: database.address,
                    as: 'addresses'
                }]
            });

            return res
                .status(httpStatus.CREATED)
                .json(client);
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
            const deleted = await database.client.destroy({
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
            const client = await database.client.update(
                req.body, {
                where: { ...req.params }
            }
            );

            return res
                .status(httpStatus.OK)
                .json(client);
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

    // Aumentar pontuação para troca
    increaseScore: async (req, res) => {
        try {
            const { newPoints } = req.query; 
            
            const client = await database.client.update(
                { score: Sequelize.literal(`score + ${newPoints || 1}`) },
                { where: { ...req.params }}
            );

            return res
                .status(httpStatus.OK)
                .json(client);
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

    // Trocar pontos por premiação
    resetScore: async (req, res) => {
        try {
            const client = await database.client.update(
                { points: 0 },
                { where: { ...req.params }}
            );

            return res
                .status(httpStatus.OK)
                .json(client);
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
});

export default ClientController;