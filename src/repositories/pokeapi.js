const API_HOST = "https://pokeapi.co/api/v2";

export async function retrieve(limit = "151", offset = "0") {
  const response = await fetch(`${API_HOST}/pokemon?limit=${limit}&offset=${offset}`);
  const data = response.json();
  return data;
}

export async function profile(name) {
  const response = await fetch(`${API_HOST}/pokemon/${name}`);
  const dataProfile = response.json();
  return dataProfile;
}

export async function ability(name) {
  const response = await fetch(`${API_HOST}/ability/${name}`);
  const dataAbility = response.json();
  return dataAbility;
}

export async function types(name) {
  const response = await fetch(`${API_HOST}/type/${name}`);
  const dataType = response.json();
  return dataType;
}
