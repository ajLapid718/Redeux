import axios from 'axios';
import { FETCH_PLAYER, fetchPlayerSuccess } from '../store/utilities/player';
import 'rxjs/Rx';;

const getPlayer = (lastName, firstName) => {
  return axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`);
};

const fetchPlayerEpic = action$ =>
  action$.ofType(FETCH_PLAYER)
    .mergeMap(action => getPlayer(action.lastName, action.firstName))
        .map(response => fetchPlayerSuccess(response.data))
        .catch(err => console.log(err))

export default fetchPlayerEpic;
