import { Pool } from 'pg';

// Configuración de conexión a PostgreSQL
const pool = new Pool({
    user: 'postgres',         // Usuario de PostgreSQL
    host: 'localhost',        // Servidor (en este caso local)
    database: 'haru',         // Nombre de la base de datos
    password: 'haruxmakoto', // Reemplaza por tu contraseña
    port: 5432,               // Puerto de PostgreSQL
});

export default pool;
