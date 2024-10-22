const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const postLoginFn = async (data) => {
  const res = await fetch(`${BACKEND_URL}/users`);
  const users = await res.json();

  if (!res.ok || !Array.isArray(users)) {
    throw new Error("Ocurrio un error al intentar iniciar sesion");
  }
  const foundUser = users.find((user) => {
    return user.username === data.username;
  });
  if (!foundUser) {
    throw new Error("El usuario o la contraseña no son correctos");
  }

  const isPasswordTheSame = foundUser.password === data.password;
  if (!isPasswordTheSame) {
    throw new Error("El usuario o la contraseña no son correctos");
  }

  return { ...foundUser, password: undefined };
};

export const postRegisterFn = async (data) => {

  const res = await fetch(`${BACKEND_URL}/users`, {
    method: `POST`,
    headers: {
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify({
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      password: data.password,
      isAdmin: false,
    }),
  });
  if (!res.ok) {
    throw new Error("ocurrio un error al hacer el registro");
  }
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.username,
    isAdmin: false,
  };
};
