const GET_MISSIONS_API = 'SpaceTravelersHub/missions/GET_MISSIONS_API';
const MISSIONS_API = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const getMissions = (payload) => ({
  type: GET_MISSIONS_API,
  payload,
});

export const getMissionsFromAPI = () => async (dispatch) => {
  await fetch(`${MISSIONS_API}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const arrData = data.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
      if (arrData) {
        dispatch(getMissions(arrData));
      }
    });
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS_API:
      return [...action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
