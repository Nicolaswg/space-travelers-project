const GET_ROCKETS_API = 'SpaceTravelersHub/missions/GET_MISSIONS_API';
const ROCKET_API = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const getRockets = (payload) => ({
  type: GET_ROCKETS_API,
  payload,
});

export const getRocketsFromAPI = () => async (dispatch) => {
  await fetch(`${ROCKET_API}`)
    .then((response) => response.json())
    .then((data) => {
      const arrData = data.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        type: rocket.rocket_type,
        image: rocket.flickr_images[0],
      }));
      if (arrData) {
        dispatch(getRockets(arrData));
      }
    });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS_API:
      return [...action.payload];
    default:
      return state;
  }
};

export default rocketsReducer;
