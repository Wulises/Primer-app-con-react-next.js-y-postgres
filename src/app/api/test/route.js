import pool from '@/app/lib/db';

export async function GET(request) {
  try {
    const { rows } = await pool.query('SELECT * FROM waifus');
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    console.error('Error al conectar con PostgreSQL:', error);
    return new Response('Error al conectar con PostgreSQL', { status: 500 });
  }
}
