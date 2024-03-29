import axios from "axios";
export const SET_FLOW_MAX = 'SET_FLOW_MAX';
export const SET_LOC_MAX = 'SET_LOC_MAX';
export const SET_TOP_FLOWS = 'SET_TOP_FLOWS';
export const SET_LON_LAT = 'SET_LON_LAT';
export const SET_OPACITY = 'SET_OPACITY';
export const SET_HOVER = 'SET_HOVER';
export const SET_URL = 'SET_URL';
export const SET_PARAMS = 'SET_PARAMS';

export const GET_TYPES = 'GET_TYPES';
export const GET_LOC = 'GET_LOC';
export const GET_FLOW = 'GET_FLOW';
export const PROMISE_FAILURE = 'PROMISE_FAILURE';

export function dataPromiseAction({ url, params }, actionType) {
    return (dispatch) => {
        axios.get(url, params)
            .then(res => {
                dispatch({
                    type: actionType,
                    data: res.data
                })
            });
        return { type: actionType, locations: null, flows: null, error: null };
    }

    // const requestLocs = axios.get(locationUrl);
    // const requestFls = axios.get(flowUrl, { params: { minTime: 5, maxTime: 10 } });
    // return (dispatch) => {
    //     axios.all([requestLocs, requestFls])
    //         .then(axios.spread((locRes, flRes) => {
    //             dispatch({
    //                 type: actionType,
    //                 data: { locations: locRes.data, flows: flRes.data }
    //             });
    //         }))
    //         .catch(error => dispatch({ type: actionType, error: error }));
    //     return { type: actionType, data: null, error: null };
    // }
}

export function promiseAction({ url, params}, actionType) {
    /* action creator: returns an action but dispatches two more actions on the side -> asynchronous side effect */
    return (dispatch) => {
        axios.get(url, {params: params})
            .then(res => {
                dispatch({
                    type: actionType,
                    value: res.data
                });
            })
            .catch(error => dispatch({ type: actionType, error: error }));
        return { type: actionType, data: null, error: null };
    }
}

export function typesPromiseAction(typeUrl, actionType) {
    /* action creator: returns an action but dispatches two more actions on the side -> asynchronous side effect */
    return (dispatch) => {
        axios.get(typeUrl)
            .then(res => {
                dispatch({
                    type: actionType,
                    value: res.data
                });
            })
            .catch(error => dispatch({ type: actionType, error: error }));
        return { type: actionType, data: null, error: null };
    }
}

export function setFlowMax(value) {
    return { type: SET_FLOW_MAX, value };
}

export function setLocMax(value) {
    return { type: SET_LOC_MAX, value };
}

export function setLonLat(value) {
    return { type: SET_LON_LAT, value }
}

export function setTopFlows(value) {
    return { type: SET_TOP_FLOWS, value }
}


export function setOpacity(value) {
    return { type: SET_OPACITY, value }
}

export function setHover(value) {
    return { type: SET_HOVER, value }
}