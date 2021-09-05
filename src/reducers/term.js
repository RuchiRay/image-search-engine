const term = (state={searchTerm:'food'},action)=>{
    const {type,payload}  = action
    switch (type) {
        case "SETTERM":
          return {...state,searchTerm:payload};     
        default:
          return state;
      }
    };
    export default term;
    
