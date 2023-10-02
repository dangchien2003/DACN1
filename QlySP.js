import {createAction, handleActions} from 'redux-actions';
import {put, call, takeLatest} from 'redux-saga/effects';
import {fromJS} from 'immutable';
import axios from '../../utils/axios';
import handleResponse from '../../utils/handle-respone';
import history from '../../components/routes/history';

//Action types
export const UPDATE = 'foods/UPDATE';
export const UPDATE_SUCCESSFULLY = 'foods/UPDATE_SUCCESSFULLY';
export const SHOW = 'foods/SHOW';
export const SHOW_SUCCESSFULLY = 'foods/SHOW_SUCCESSFULLY';


//Action creators
export const update = createAction(UPDATE);
export const updateSuccessfully = createAction(UPDATE_SUCCESSFULLY);
export const show = createAction(SHOW);
export const showSuccessfully = createAction(SHOW_SUCCESSFULLY);


// Reducer
const foodsInitialState = fromJS({
    data: []
});

const updateData = (state, action) => state.setIn(['data'], fromJS(action.payload));


export default handleActions({
    [SHOW_SUCCESSFULLY]: updateData
}, foodsInitialState);

// Selectors
export const getFoods = state => state.get('foods').get('data');

// Sagas
export function* foodsSagas() {
    yield takeLatest(update, onUpdate);
    yield takeLatest(show, onShow);
}

function* onUpdate(action) {
    const response = yield call(onUpdateApi, action.payload);

    if (response.status === 200) {
        yield put(updateSuccessfully(response.data.data));
        handleResponse(response);

        return;
    }

    handleResponse(response);
}

function* onShow(action) {
    const response = yield call(onShowApi);

    if (response.status === 200) {
        const {callback} = action.payload;

        if (callback) {
            const {data} = response;

            data.forEach((item, index) => {
                item.key = index;
            });
            
            callback(data);
        }

        yield put(showSuccessfully(response.data));

        return;
    }

    handleResponse(response);
}

// Apis
function onUpdateApi(data) {
    const url = 'api/foods/update';

    return axios.post(url, data)
        .then(response => response)
        .catch(error => error.response);
}

function onShowApi() {
    const url = 'api/foods/show';

    return axios.get(url)
        .then(response => response)
        .catch(error => error.response);
}
