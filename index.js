const express=require('express')
const cookieParser = require('cookie-parser');





require('./config/DB')

const app=express();

const Port=3000;



app.use(express.json());



app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>'); // Sending "Hello" as the response
});

app.listen(Port,()=>console.log(`server started at ${Port}`))