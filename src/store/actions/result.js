import * as actionTypes from './actionTypes';

export const saveResult = ( res ) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const storeResult = ( res ) => {
  return dispatch => { 
    console.log(2)
    setTimeout(() => {
      dispatch(saveResult(res))
    }, 2000);
  }
};

export const deleteResult = ( resElId ) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};