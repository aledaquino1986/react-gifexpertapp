export const getGifs = async category => {
  let url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=5DGJ6z2PCeVztvJyNWg9S3O9EX75kxrV`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    };
  });

  return gifs;
};
