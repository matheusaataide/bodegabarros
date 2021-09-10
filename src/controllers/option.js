import httpStatus from 'http-status';

const OptionController = database => ({
    store: async (req, res) => {
        let option = {
            ...req.body,
            productId: req.params.productId
        };

        try {
            const option = await database.option.create(option);

            return res
                    .status(httpStatus.CREATED)
                    .json(option);
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
            const dropped = await database.option.destroy({
                where: { id: req.params.optionId }
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
    },
    edit: async (req, res) => {
        try {
            const option = await database.option.update(
                req.body,
                {
                    where: {  id: req.params.optionId }
                }
            );
            
            return res
                    .status(httpStatus.OK)
                    .json(option);
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
    storeOption: async (req, res) => {
        let option = {
            ...req.body,
            productId: req.params.productId
        };

        try {
            const option = await database.option.create(option);

            return res
                    .status(httpStatus.CREATED)
                    .json(option);
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

export default OptionController; 