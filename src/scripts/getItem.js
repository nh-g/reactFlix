export function getById(id, array) {
  if (array !== undefined) {
    return array.find((item) => {
      return item.id === id;
    });
  }
}

export function getGenre(array, genre) {
  if (array !== undefined) {
    if (genre === "all") {
      return array;
    }
    return array.filter((item) => {
      return item.genre === genre;
    });
  } else {
    return [];
  }
}

export function searchTitle(array, query) {
  if (query && array !== undefined) {
    return array.filter((item) => {
      const data = item.title.toLowerCase();
      return data.includes(query.toLowerCase());
    });
  } else {
    return [];
  }
}

export function getTop10(list) {
  if (list !== undefined) {
    const filteredList = list.sort((a, b) => b.total_views - a.total_views);
    return filteredList.slice(0, 9);
  } else {
    return [];
  }
}
