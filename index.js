const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


app.get('/', (req , res) => {
    res.send({ arguilho: "EntreAmigos!"});
});



app.listen(8000, () => {
    console.log("Rodando papai!")
});