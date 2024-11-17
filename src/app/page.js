async function getData() {
  const res = await fetch('http://localhost:3000/api/test');
  if (!res.ok) {
      throw new Error('Error al obtener los datos');
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
      <main style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Waifus desde PostgreSQL</h1>
          <ul>
              {data.map((waifu, index) => (
                  <li key={index}>
                      {waifu.nombre} - {waifu.codename}
                  </li>
              ))}
          </ul>
      </main>
  );
}
