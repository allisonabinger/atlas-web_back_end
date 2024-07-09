import express from 'express';
import { promisify } from 'util';
import redis from 'redis';

// data setup

const listProducts = [
    { id: 1, name: 'Suitcase 250', price: 50, stock: 4 },
    { id: 2, name: 'Suitcase 450', price: 100, stock: 10 },
    { id: 3, name: 'Suitcase 650', price: 350, stock: 2 },
    { id: 4, name: 'Suitcase 1050', price: 550, stock: 5 }
];

function getItemById(id) {
    return listProducts.find(item => item.id === id);
}

/////////////////// server setup

const app = express();
const port = 1245;

const redisClient = redis.createClient();
const getAsync = promisify(redisClient.get).bind(redisClient);

/////////////////// redis stock reservation

function reserveStockById(itemId, stock) {
    redisClient.set(`item.${itemId}`, stock);
}

async function getCurrentReservedStockById(itemId) {
    const reservedStock = await getAsync(`item.${itemId}`);
    return parseInt(reservedStock) || 0;
}

//////////////////// server start
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


/////////////////// routes

// list all products
app.get('/list_products', (req, res) => {
    res.json(listProducts.map(item => ({
        itemId: item.id,
        itemName: item.name,
        price: item.price,
        initialAvailableQuantity: item.stock
    })));
});

// get product by item id
app.get('/list_products/:itemId', async (req, res) => {
    const itemId = parseInt(req.params.itemId);
    const item = getItemById(itemId);

    // item doesn't exist
    if (!item) {
        return res.json({ status: 'Product not found' });
    }

    const currentReservedStock = await getCurrentReservedStockById(itemId);
    const currentQuantity = item.stock - currentReservedStock;

    res.json({
        itemId: item.id,
        itemName: item.name,
        price: item.price,
        initialAvailableQuantity: item.stock,
        currentQuantity: currentQuantity
    });
});

// reserve product by itemid
app.get('/reserve_product/:itemId', async (req, res) => {
    const itemId = parseInt(req.params.itemId);
    const item = getItemById(itemId);

    // item doesn't exist
    if (!item) {
        return res.json({ status: 'Product not found' });
    }

    const currentReservedStock = await getCurrentReservedStockById(itemId);
    if (currentReservedStock >= item.stock) {
        return res.json({ status: 'Not enough stock available', itemId: itemId });
    }

    reserveStockById(itemId, currentReservedStock + 1);
    res.json({ status: 'Reservation confirmed', itemId: itemId });
});
