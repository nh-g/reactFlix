//@ts-nocheck
export default function myListReducer(state, action) {
  switch (action.type) {
    /** CART REDUCER */
    case "ADD_TO_CART":
      return addItem(state, action);

    case "REMOVE_FROM_CART":
      return removeFromCart(state, action);

    default:
      return state;
  }
}

/** CART REDUCER */
// function addItem(state, action) {
//   const { item } = action;
//   if (item !== null) return { ...state, cart: [...state.cart, item] }; // return object
// }
function addItem(state, action) {
  const { item } = action;

  if (item !== null) return [...state, item];
  return state;
}


function removeFromCart(state, action) {
  const index = state.findIndex((item) => item.id === action.id);
  let newList = [...state];
  if (index >= 0) {
    newList.splice(index, 1);
  } else {
    console.warn(
      `Cant remove product (id: ${action.id}) as its not in basket!`
    );
  }

  return newList;
}

