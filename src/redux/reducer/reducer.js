
const iState={
    id:'',
}
const reducer=(state=iState,action)=>{
    if(action.type === 'ADD_ID'){ 
        state.id=action.payload
        return{ 
            ...state
        }
    }
    return{...state};
}
export default reducer;