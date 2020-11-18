const express = require('express');
const app = express();
// function rootCall (req , res){
//     console.log('thank you for calling')
// }
// app.get('/', rootCall )
app.get('/', (req, res) => res.send('thank you for calling me'))

app.listen(3000, () => console.log('Listenting to port 3000')) 