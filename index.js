const express = require('express');
const db = require('./models');
const app = express();
const cors = require('cors');

app.use( express.json() );

app.use(cors());

if(db.sequelize.authenticate()) {
    console.log('conexión exitosa');
}else {
    console.log('error en la conexión')
}

app.use('/auth', require('./routes/auth'));
app.use('/menu', require('./routes/menu'));

app.listen(3000, ()=>{
    console.log("servidor corriendo en puerto " + 3000)
})