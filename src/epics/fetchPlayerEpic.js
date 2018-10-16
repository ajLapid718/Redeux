import { FETCH_PLAYER, getPlayer, fetchPlayerSuccess } from '../store/utilities/player';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

const fetchPlayerEpic = action$ =>
  action$
    .ofType(FETCH_PLAYER)
    .mergeMap(action =>
      Observable.fromPromise(getPlayer(action.lastName, action.firstName))
        .map(nbaPlayer => fetchPlayerSuccess(nbaPlayer))
        .catch(err => console.log(err))
      )

export default fetchPlayerEpic;
