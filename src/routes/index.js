import express from 'express';
import categoriesRoute from './categoriesRoute';
import clientsRoute from './clientsRoute';
import districtsRoute from './districtsRoute';
import productsRoute from './productsRoute';

const router = express.Router();

const includeRoute = route => route(router);

router.get('/', (req, res) => {
    return res.status(200).json({
        "app": "Bodega Barros Pizzaria",
        "url": "https://www.instagram.com/bodegabarrospizzaria",
        "developer": {
            "name": "Matheus Ataide",
            "email": "matheusantonio96@gmail.com"
        }
    })
});

includeRoute(categoriesRoute); // rota /categories
includeRoute(productsRoute); // rota /products
includeRoute(clientsRoute); // rota /clients
includeRoute(districtsRoute); 


export default router;