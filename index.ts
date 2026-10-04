interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}

interface Usuario {
  nombre: string;
  email: string;
  username: string;
  city: string;
}

async function obtenerUsuarios(): Promise<void> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const usuarios: User[] = await response.json();

  console.log(usuarios[0]);

  const usuariosTransformados: Usuario[] = usuarios.map(
    (usuario): Usuario => ({
      nombre: usuario.name,
      email: usuario.email,
      username: usuario.username,
      city: usuario.address.city,
    })
  );

  console.log(usuariosTransformados);
}

obtenerUsuarios();

