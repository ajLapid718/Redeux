import { REMOVE_PLAYER, removePlayer, removePlayerSuccess } from '../store/utilities/player';
import { Observable } from 'rxjs/Rx';

const removePlayerEpic = action$ =>
  action$.ofType(REMOVE_PLAYER)
    .mergeMap(action =>
      Observable.fromPromise(removePlayer(action.lastName, action.firstName))
        .map(response => removePlayerSuccess(response.data))
        .catch(err => console.log(err))
      )

export default removePlayerEpic;
