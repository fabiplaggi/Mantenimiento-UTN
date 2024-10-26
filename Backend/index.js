import app from './app.js';
import { PORT, DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER, JWT_SECRET, NODE_ENV } from './config/config.js'

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ' + PORT);
});