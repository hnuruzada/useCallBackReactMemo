function Reducer(state,action){
  
    switch (action.type) {
      case 'increment':
        console.log("Increment");
        return{ count:state.count+1}
       
      case 'decrement':
        console.log("decrement");
        return {count:state.count-1}
   
      default:
        break;
    }
  }

  export default Reducer