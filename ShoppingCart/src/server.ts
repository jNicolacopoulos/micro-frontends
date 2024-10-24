/* eslint-disable no-console */
import express from 'express';

const app = express();
app.use('/shopping-cart', express.static('./build'));

app.listen(8082);
console.log(`🔵  Shopping Cart service running...:
>> http://127.0.0.1:8082`);
