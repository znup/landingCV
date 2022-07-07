const API =
  'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=RDZiQo7nAkQHU&part=snippet&maxResults=10';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    'X-RapidAPI-Key': '9a1af2c5b0mshbdf04f7791b5ac8p1a2f68jsnbbbf19b8cbd1',
  },
};

const fetchData = async (urlApi) => {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
};

(async () => {
  try {
    const videos = await fetchData(API);
    // let videos = { items: [] };
    // videos = await fetchData(API);
    console.log(videos);
    // Template
    let view = `
    ${videos.items
      .map(
        (video) =>
          `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
        >
        
        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `
      )
      .slice(0, 4)
      .join('')}
    `;
    console.log(content);
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
    // content.innerHTML = '<p>Error al cargar </p>';
  }
})();
