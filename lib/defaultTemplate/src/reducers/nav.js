
import { Navigator } from '../containers/navigators';
import { NavigationActions } from 'react-navigation';

const router = Navigator.router;
const firstState = router.getStateForAction(NavigationActions.init());
const secondAction = router.getActionForPathAndParams('LoginNavigator');
const initialState = router.getStateForAction(secondAction, firstState);

const nav = (state=initialState, action) => {

	let nextState = router.getStateForAction(action, state);

	switch(action.type) {
		case NavigationActions.BACK:
			if (action.key === 'login after register') {
				let newAction = NavigationActions.reset({
					index: 0,
					key: null,
					actions: [
						NavigationActions.navigate({routeName:'MainCardNavigator'}),
					]
				})

				nextState = router.getStateForAction(newAction, nextState);
			}
			break
		default:
			nextState = router.getStateForAction(action, state);
	}

	return nextState || state;
};

export default nav;
