const INIT_STATE = {
  coords: {
    latitude: 0,
    longitude: 0
  }
}
const LocationReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
      return action.payload;
    default:
      return state
  }
}

export default LocationReducer