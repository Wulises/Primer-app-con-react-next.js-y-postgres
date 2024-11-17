import { Pool } from 'pg';

// Configuración de conexión a PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,         // Usuario de la base de datos
  host: process.env.DB_HOST,         // Dirección del host de Render
  database: process.env.DB_DATABASE, // Nombre de la base de datos
  password: process.env.DB_PASSWORD, // Contraseña
  port: process.env.DB_PORT || 5432, // Puerto
});

export default pool;
