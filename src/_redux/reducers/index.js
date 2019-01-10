import {createNavigationReducer} from 'react-navigation-redux-helpers';
import {combineReducers} from 'redux';

import AppNavigator from '../../_navigators';

import todo from './todo'

const navReducer = createNavigationReducer(AppNavigator);
const reducers = combineReducers({
    nav: navReducer,
    todo
});

export default reducers