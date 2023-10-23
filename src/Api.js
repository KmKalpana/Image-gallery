import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "NWbeDLF7yBUd7xNPEpvMI9NRzC1v-KzZodiJcQDF8R8",
});

// Fetch Fresh Photos
export const fetchPhotos = async () => {
  const result = await unsplash.photos.list({ page: 1, perPage: 50 });
  if (result.status === 200) {
    return result.response.results;
  }
  return [];
};

// Fetch Photos by Query
export const fetchPhotosByQuery = async (query) => {
  const result = await unsplash.search.getPhotos({
    query: query,
    page: 1,
    perPage: 30,
  });
  if (result.status === 200) {
    return result.response.results;
  }
  return [];
};

// Fetch Single Photo By Id
export const fetchPhotoById = async (photoId) => {
  const result = await unsplash.photos.get({
    photoId: photoId,
  });
  if (result.status === 200) {
    return result.response;
  }
  return null;
};
