import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducer from "./reducer"
export const makeStore = (initialState) => {
    const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
    if (module.hot) {
        module
            .hot
            .accept('./reducer', () => {
                console.log('Replacing reducer');
                store.replaceReducer(require('./reducer').default);
            });
    }
    return store;
};
