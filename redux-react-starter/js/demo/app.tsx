import { Action, Reducer, createStore, Store, combineReducers, ReducersMapObject } from 'redux';

enum actionTypes {
	ADD,
	SUBTRACT
}

interface CalcAction extends Action {
	value: number
}

const createAddAction: (value: number) => CalcAction = (value) => ({
	type: actionTypes.ADD,
	value
});

const createSubtractAction: (value: number) => CalcAction = (value) => ({
	type: actionTypes.SUBTRACT,
	value
});

interface AppState {
	sum: number,
	history: string[]
}

const sumReducer: Reducer<number> = (state: number = 0, action: CalcAction) => {

	switch(action.type) {
		case actionTypes.ADD:
			return state + action.value;
		case actionTypes.SUBTRACT:
			return state - action.value;
		default:
			return state;
	}

};

const historyReducer: Reducer<string[]> = (state: string[] = [], action: CalcAction) => {

	switch(action.type) {
		case actionTypes.ADD:
			return state.concat(`op: add, value: ${action.value}`);
		case actionTypes.SUBTRACT:
			return state.concat(`op: subtract, value: ${action.value}`);
		default:
			return state;
	}

};

const reducersMap: ReducersMapObject = {
	sum: sumReducer,
	history: historyReducer
}

const appStore: Store<AppState> = createStore<AppState>(combineReducers<AppState>(reducersMap));

appStore.subscribe(() => {

	console.log('action was dispatched, state was reduced');
	console.log(appStore.getState());

});

appStore.dispatch(createAddAction(2));
appStore.dispatch(createSubtractAction(4));
appStore.dispatch(createAddAction(3));
appStore.dispatch(createSubtractAction(7));
appStore.dispatch(createAddAction(1));


