const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000


app.use(express.json());


app.use(require('../src/routes/route'))


mongoose.connect("mongodb+srv://RahulChauhan:3aDm5xdCx8MiuHql@cluster0.xzyyibs.mongodb.net/group35urlShortnerProject",{
    useNewUrlParser: true
})

.then( () => console.log("MongoDb is connected"))
.catch (err => console.log(err) );



app.listen( port,  function () {
    console.log(`Express app running on port ${port}`);
});


