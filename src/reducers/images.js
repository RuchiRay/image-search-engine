const images = (state={imageBox:[]},action)=>{
    const {type,payload}  = action
    switch (type) {
        case "ADD_IMAGE":
          {
           
            let temp = [...state.imageBox];
           const newtemp = payload.map((item)=>{
              return item
            })
           const final = [...temp,...newtemp]
            // console.log('printing final',final);
            
           return {...state,imageBox:final};     
          }
          case"EMPTY":
          return {...state,imageBox:[]}
        default:
          return state;
      }
    };
    export default images;
    