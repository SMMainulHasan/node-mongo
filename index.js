const express = require('express');
const app = express();

//dynamic api
app.get('/friend/:id', (req, res) => {

    const friends = ['kolim', 'Solim', 'Nolim', 'Korim', 'Kuddus']

    const id = req.params.id;
    const name = friends[id];
    res.send(name);
})

app.listen(3000, ()=> console.log('listening to port 3000'))