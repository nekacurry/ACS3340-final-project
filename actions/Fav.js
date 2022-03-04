export const NEW_FAV = 'NEW_FAV'

export const addFav = (fav) => {
    return {
      type: 'NEW_FAV',
      payload: { fav }
    }
  }