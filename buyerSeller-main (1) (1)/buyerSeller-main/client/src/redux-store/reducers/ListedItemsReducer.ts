const initialState = {
    listedItems: {},
  };
  
  function rootReducer(state = initialState, action: any) {
    switch (action.type) {
      case "ALL_LISTED_ITEMS":
        state.listedItems = action.payload;
//   console.log("ALL_LISTED_ITEMS>>>>",state.listedItems)
        return { listedItems: state.listedItems };
        break;
  
      default:
        return state;
    }
  }
  
  export default rootReducer;
  