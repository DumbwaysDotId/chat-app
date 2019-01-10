import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'
import {createLogger} from 'redux-logger'
import {applyMiddleware} from 'redux'

const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
)

const middlewares = applyMiddleware(
    navMiddleware,
    createLogger()
)

export default middlewares