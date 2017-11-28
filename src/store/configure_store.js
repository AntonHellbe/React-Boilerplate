import reducers from '../reducers/index';
import { createStore } from 'redux';

export default () => {
    return createStore(reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //Enables Redux-dev-tools in webbrowser
}
