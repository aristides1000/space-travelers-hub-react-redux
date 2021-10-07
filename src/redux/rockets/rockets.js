import axios from 'axios';

const GET_ROCKET_REQUEST = 'GET_ROCKET_REQUEST';
const GET_ROCKET_SUCCESS = 'GET_ROCKET_SUCCESS';
const GET_ROCKET_FAILURE = 'GET_ROCKET_FAILURE';
const RESERVE_ROCKET = 'RESERVE_ROCKET';

export const getRocketRequest = () => ({
  type: GET_ROCKET_REQUEST,
});

export const getRocketSuccess = (rockets) => ({
  type: GET_ROCKET_SUCCESS,
  payload: rockets,
});

export const getRocketFailure = (error) => ({
  type: GET_ROCKET_FAILURE,
  payload: error,
});

export const fetchRockets = () => (dispatch) => {
  dispatch(getRocketRequest);
  axios.get('https://api.spacexdata.com/v3/rockets')
    .then((response) => {
      const newData = response.data;
      const rockets = newData.map((rocket) => ({
        id: rocket.id,
        description: rocket.description,
        rocketName: rocket.rocket_name,
        flickrImages: rocket.flickr_images[0],
      }));
      dispatch(getRocketSuccess(rockets));
    })
    .catch((error) => {
      const errorMssg = error.message;
      dispatch(getRocketFailure(errorMssg));
    });
};

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKET_REQUEST:
      return { ...state, loading: true };

    case GET_ROCKET_SUCCESS:
      return {
        ...state,
        loading: true,
        rockets: action.payload,
        error: '',
      };

    case GET_ROCKET_FAILURE:
      return {
        loading: false,
        rockets: [],
        error: action.payload,
      };

    case RESERVE_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== action.payload.id) { return rocket; }
          return { ...rocket, reserved: true };
        }),
      };

    default:
      return state;
  }
};

export default rocketsReducer;
