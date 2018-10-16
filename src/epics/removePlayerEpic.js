import { REMOVE_PLAYER, removePlayerSuccess } from '../store/utilities/player';

const removePlayerEpic = action$ =>
  action$.ofType(REMOVE_PLAYER)
    .mapTo(removePlayerSuccess());

export default removePlayerEpic;
