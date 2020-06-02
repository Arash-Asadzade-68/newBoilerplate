import {takeLatest, all} from 'redux-saga/effects'
//functions in saga 
import {getAllBeers} from './Beers/saga'
//actions for get request

import {GET_ALL_BEERS_ACTION  } from './Beers/Constants'
export default function* sagaIndex() {

  yield all([
    takeLatest(GET_ALL_BEERS_ACTION, getAllBeers),
  ])
}