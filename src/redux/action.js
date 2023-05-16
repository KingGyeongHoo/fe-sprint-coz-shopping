export const setItems = items => ({
    type: "SET_ITEMS",
    payload: items,
  });

export const setBookmarks = items => ({
  type: "SET_BOOKMARK",
  payload : items
})
export const removeBookmarks = items => ({
  type: "REMOVE_BOOKMARK",
  payload : items
})