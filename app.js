const express = require('express');
const port = process.env.PORT || 3000;
const cancionesRoutes = require('./routes/cancionesRoutes')
const generosRoutes = require('./routes/generosRoutes')

const app = express();
app.use(express.json());

app.use('/canciones', cancionesRoutes )
app.use('/generos', generosRoutes )

app.listen(port, () => console.log(`Servidor funcionando bien en puerto ${port}`));