const pages = (state=1,action)=>{
    const {type}  = action
    switch (type) {
        case "CHNAGE_PAGE":
          return state+1;   
          case "RESET_PAGE":
            return state = 1;  
        default:
          return state;
      }
    };
    export default pages;