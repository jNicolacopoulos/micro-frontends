/* eslint-disable no-console */
import express from 'express';

const app = express();
app.use('/product', express.static('./build'));

app.listen(8083);
console.log(`🔵  Product service running...:
>> http://127.0.0.1:8083`);
