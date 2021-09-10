import httpStatus from 'http-status';

const ProductController = database => ({
    list: async (req, res) => {
        try {
            const list = await database.product.findAndCountAll({
                distinct: true,
                order: [
                    [{ model: database.category}, 'displayOrder', 'ASC'],
                    ['displayOrder', 'ASC'],
                    ['description', 'ASC'],
                    [{ model: database.option }, 'displayOrder', 'ASC'],
                    [{ model: database.option }, 'price', 'ASC'],
                ],
                include: [
                    { model: database.category },
                    { model: database.option },
                ]
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
            const product = await database.product.create(req.body, {
                include: [{ model: database.option }]
            });

            return res
                    .status(httpStatus.CREATED)
                    .json(product);
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
            const droppedProduct = await database.product.destroy({
                where: { ...req.params }
            });

            return res
                    .status(httpStatus.OK)
                    .json(droppedProduct);
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
    index: async (req, res) => {
        try {
            const product = await database.product.findOne({
                where: {  ...req.params },
                include: [{ model: database.option }]
            });
            return res
                    .status(httpStatus.OK)
                    .json(product);
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
            const product = await database.product.update(
                req.body,
                {
                    where: {  ...req.params }
                }
            );
            
            return res
                    .status(httpStatus.OK)
                    .json(product);
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

export default ProductController; 