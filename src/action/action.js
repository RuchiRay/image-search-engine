export const setTerm = (word) => {
    return {
      type: "SETTERM",
      payload:word
    };
  };

  export const addImage = (image)=>{
    return{
      type:"ADD_IMAGE",
      payload:image
    }
  }
  
export const changePage = ()=>{
  return{
    type:'CHNAGE_PAGE'
  }
}
export const empty = ()=>{
  return{
    type:'EMPTY'
  }
}
export const resetPage = ()=>{
  return{
    type:'RESET_PAGE'
  }
}
