import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER,         // Usuario de la base de datos
  host: process.env.DB_HOST,         // Dirección del host de Render
  database: process.env.DB_DATABASE, // Nombre de la base de datos
  password: process.env.DB_PASSWORD, // Contraseña
  port: process.env.DB_PORT || 5432, // Puerto
});

export default pool;




/*import { Pool } from 'pg';

// Configuración de conexión a PostgreSQL
const pool = new Pool({
    user: 'postgres',         // Usuario de PostgreSQL
    host: 'localhost',        // Servidor (en este caso local)
    database: 'haru',         // Nombre de la base de datos
    password: 'haruxmakoto', // Reemplaza por tu contraseña
    port: 5432,               // Puerto de PostgreSQL
});

export default pool;
