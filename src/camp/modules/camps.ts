
import { createAction, handleActions } from 'redux-actions';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as _ from 'lodash';
import { put as putDatabase, fetchCamps as fetchDatabase } from '../firebase';
import { CampName } from '../models/Camp';
import User from '../models/User';

export const FETCH_REQUEST = 'CAMPS_FETCH_REQUESTED';
export const fetchRequsetCamp = createAction(FETCH_REQUEST);

const FETCH_FAILED = 'CAMPS_FETCH_FAILED';
const fetchFailureCamp = createAction(FETCH_FAILED, message => message);

const FETCH_SUCCESS = 'CAMPS_FETCH_SUCCEEDED';
const fetchSuccessCamp = createAction(FETCH_SUCCESS, camps => ({ camps }));

/**
 * saga
 */
export function* fetchCamps(action: {type: string}) {
  try {
    const camps = yield call(fetchDatabase);
    const campList:CampName[] = _.map(camps, (camp:CampName, key:string)=>{
      return new CampName(camp.campName, camp.campId, camp.twitterId, camp.uid);
     // return new Camp(camp.campName, camp.facilities, camp.freeWriting, key, camp.uid, camp.twitterId, camp.twitterName);
    });
    //const campList:Camp[] = yield call(fetchDatabase);
    yield put({ type: FETCH_SUCCESS, payload:{ camps: campList } });
  } catch (e) {
    yield put({ type: FETCH_FAILED, message: e.message });
  }
}

/**
 * reducer
 */
export const campsReducer = handleActions({
  [FETCH_SUCCESS]: (state: CampName[],  { payload: { camps } }: any) => {
    if(camps === null){
      return [];
    }
    return camps;
  },
},                                       []);