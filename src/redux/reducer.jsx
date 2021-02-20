import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (action.payload === "" || state.wishList.includes(action.payload)) {
        return { wishList: state.wishList };
      }
      let addArr = state.wishList.slice()
      addArr.splice(addArr.length, 0, action.payload)
      return {
        wishList: addArr,
      };
    case DELETE_ITEM:
      let remArr = state.wishList.slice()
      let i = remArr.findIndex((elem) => elem === action.payload)
      remArr.splice(i, 1)
      return {
        wishList: remArr,
      };
    default:
      return {
        wishList: [],
      };
  }
};

export default reducer;