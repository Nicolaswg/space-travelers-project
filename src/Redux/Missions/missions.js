const GET_MISSIONS_API = 'SpaceTravelersHub/missions/GET_MISSIONS_API';
const ADD_JOIN_MISSION = 'SpaceTravelersHub/missions/ADD_JOIN_MISSION';
const ADD_CANCEL_MISSION = 'SpaceTravelersHub/missions/ADD_CANCEL_MISSION';
const MISSIONS_API = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const getMissions = (payload) => ({
  type: GET_MISSIONS_API,
  payload,
});

export const joinMission = (id) => ({
  type: ADD_JOIN_MISSION,
  id,
});

export const cancelMission = (id) => ({
  type: ADD_CANCEL_MISSION,
  id,
});

export const getMissionsFromAPI = () => async (dispatch) => {
  await fetch(`${MISSIONS_API}`)
    .then((response) => response.json())
    .then((data) => {
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
    case ADD_JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return {
          ...mission,
          reserved: true,
        };
      });
      return [
        ...newState,
      ];
    }
    case ADD_CANCEL_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return {
          ...mission,
          reserved: false,
        };
      });
      return [
        ...newState,
      ];
    }
    default:
      return state;
  }
};

export default missionsReducer;
