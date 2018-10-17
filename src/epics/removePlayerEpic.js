import { REMOVE_PLAYER, removePlayerSuccess } from '../store/utilities/player';
import { ofType } from 'redux-observable';
import { mapTo, catchError } from 'rxjs/operators';

const removePlayerEpic = action$ => {
  return action$.pipe(
    ofType(REMOVE_PLAYER),
    mapTo(removePlayerSuccess()),
    catchError(err => console.log(err))
  )
}

export default removePlayerEpic;
