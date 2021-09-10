import httpStatus from 'http-status';

const CategoryController = database => ({
    // List all categories, including products within those categories
    list: async (req, res) => {
        try {
            const list = await database.category.findAndCountAll({
                distinct: true,
                order: [
                    ['displayOrder', 'ASC'],
                    ['name', 'ASC'],
                    [{ model: database.product }, 'displayOrder', 'ASC']
                ],
                include: [{ 
                            model: database.product, 
                            include: [{ model: database.option }]
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

    //
    index: async (req, res) => {
        try {
            const category = await database.category.findOne({
                where: {  ...req.params },
                include: [{ 
                    model: database.product, 
                    include: [{ model: database.option }]
                }]
            });
            return res
                    .status(httpStatus.OK)
                    .json(category);
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
            const category = await database.category.create(req.body, {
                include: [{ 
                    model: database.product,
                    include: [{ 
                        model: database.option 
                    }]
                }]
            });

            return res
                    .status(httpStatus.CREATED)
                    .json(category);
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
            const deleted = await database.category.destroy({
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
            const category = await database.category.update(
                req.body, {
                    where: {  ...req.params }
                }
            );
            
            return res
                    .status(httpStatus.OK)
                    .json(category);
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

export default CategoryController; 