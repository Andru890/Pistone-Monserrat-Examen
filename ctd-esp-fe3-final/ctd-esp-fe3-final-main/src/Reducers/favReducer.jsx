export const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const updatedFavoritesAdd = [...state.favorites, action.payload];
      localStorage.setItem('favorites', JSON.stringify(updatedFavoritesAdd));
      return { ...state, favorites: updatedFavoritesAdd };

    case 'REMOVE_FAVORITE':
      const updatedFavoritesRemove = state.favorites.filter(
        (fav) => fav.id !== action.payload.id
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavoritesRemove));
      return { ...state, favorites: updatedFavoritesRemove };

    default:
      return state;
  }
};
