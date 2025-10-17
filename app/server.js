const express = require('express');
const app = express();
app.get('/health',(r,res)=>res.send('OK'));
app.get('/',(r,res)=>res.send('CMSLESS POC'));
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log('listening',port));
