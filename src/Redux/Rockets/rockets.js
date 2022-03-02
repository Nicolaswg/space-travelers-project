const GET_ROCKETS_API = 'SpaceTravelersHub/missions/GET_ROCKETS_API';
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
        description: rocket.description,
        image: rocket.flickr_images[0],
        reserved: false,
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
