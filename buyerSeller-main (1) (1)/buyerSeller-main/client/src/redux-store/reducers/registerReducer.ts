const initialState = {
    register: {},
  };
  
  function rootReducer(state = initialState, action:any) {
    switch (action.type) {
    
        case "REGISTER_USER":
          state.register = action.payload;
          console.log("REGISTER_USER_@@@", state.register);
          return { register: state.register };
          break;
       
      default:
        return state;
    }
  }
  
  export default rootReducer;