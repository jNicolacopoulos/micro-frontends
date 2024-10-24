/* eslint-disable no-console */
import express from 'express';

const app = express();
app.use('/account', express.static('./build'));

app.listen(8081);
console.log(`🔵  Account service running...:
>> http://127.0.0.1:8081`);
