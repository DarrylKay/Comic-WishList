const initialState = {
  myList: [],
  openInfoBook: {},
  popupOpen: false,
  listOpen: false
};

let newState;

export const appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      var myList = [...state.myList, action.payload];
      newState = Object.assign(
        /*get new object*/ {},
        /*merge it with the old state*/ state,
        /*assign newly created object with old state and new info to the state*/ {
          myList: myList
        }
      );
      return newState;

    case "REMOVE_BOOK":
      myList = state.myList.filter(book => book !== action.payload);
      newState = Object.assign({}, state, { myList: myList });
      return newState;

    case "OPEN_INFO_BOOK":
      newState = Object.assign({}, state, {
        openInfoBook: action.payload,
        popupOpen: true
      });
      return newState;

    case "CLOSE_INFO_BOOK":
      newState = Object.assign({}, state, {
        popupOpen: false
      });
      return newState;

    case "OPEN_MY_LIST":
      newState = Object.assign({}, state, {
        listOpen: true
      });
      return newState;

    case "CLOSE_MY_LIST":
      newState = Object.assign({}, state, {
        listOpen: false
      });
      return newState;

    default:
      return state;
  }
};
