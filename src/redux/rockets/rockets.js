import axios from 'axios';

const GET_ROCKET_REQUEST = 'GET_ROCKET_REQUEST';
const GET_ROCKET_SUCCESS = 'GET_ROCKET_SUCCESS';
const GET_ROCKET_FAILURE = 'GET_ROCKET_FAILURE';

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

    default:
      return state;
  }
};

export default rocketsReducer;
