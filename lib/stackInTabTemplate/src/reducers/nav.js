
import { Navigator } from '../containers/navigators';
import { NavigationActions } from 'react-navigation';

const router = Navigator.router;
const firstState = router.getStateForAction(NavigationActions.init());
const secondAction = router.getActionForPathAndParams('LoginNavigator');
const initialState = router.getStateForAction(secondAction, firstState);

const nav = (state=initialState, action) => {
	let nextState = router.getStateForAction(action, state);
	return nextState || state;
};

export default nav;
