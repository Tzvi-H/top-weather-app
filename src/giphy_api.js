const apiKey = "HGvhniinGLpvWUfyTK0AYXq4eV01jOy0";
const baseuUrl = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}`;

const getImage = async (location) => {
  const url = `${baseuUrl}&s=${location}`;
  const reponse = await fetch(url, { mode: "cors" });
  const data = await reponse.json();
  return data.data.images.original.url;
};

export { getImage };
