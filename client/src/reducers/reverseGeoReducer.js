const INIT_STATE = {
  locData: {
    fullAdress: '',
    city: ''
  }
}

const reverseGeoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'REVERSE_GEO':
      return action.payload;
    default:
      return state
  }
}

export default reverseGeoReducer