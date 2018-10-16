import { FETCH_PLAYER, getPlayer, fetchPlayerSuccess } from '../store/utilities/player';
import { Observable } from 'rxjs/Rx';

const fetchPlayerEpic = action$ =>
  action$.ofType(FETCH_PLAYER)
    .mergeMap(action =>
      Observable.fromPromise(getPlayer(action.lastName, action.firstName))
        .map(response => fetchPlayerSuccess(response.data))
        .catch(err => console.log(err))
      )

export default fetchPlayerEpic;
