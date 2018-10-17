import axios from 'axios';
import { FETCH_PLAYER, fetchPlayerSuccess } from '../store/utilities/player';
import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';

const getPlayer = (lastName, firstName) => {
  return axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`);
};

const fetchPlayerEpic = action$ => {
  return action$.pipe(
    ofType(FETCH_PLAYER),
    mergeMap(action => getPlayer(action.lastName, action.firstName)),
    map(response => fetchPlayerSuccess(response.data)),
    catchError(err => console.log(err)),
  )
}

export default fetchPlayerEpic;
