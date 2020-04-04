const  stateId = (state = [], action) => {
  switch (action.type) {
    case 'STATE_ID':
      return [
        ...state,
        {
          id: action.id 
        }
      ] 
    default:
      return state
  }
}

export default stateId;