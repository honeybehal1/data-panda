const profileReducer = (state={}, action={}) => {
    switch (action.type) {
      case "profile":
        return {
          rotating: action.payload
        };
      default:
        return state;
    }
  };

  export default profileReducer;