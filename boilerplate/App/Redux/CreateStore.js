import { createStore, applyMiddleware, compose } from 'redux'
import Config from '../Config/DebugConfig'
import createSagaMiddleware from 'redux-saga'
import ScreenTracking from './ScreenTrackingMiddleware'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import Reactotron from 'reactotron-react-native'

export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Analytics Middleware ------------- */
  middleware.push(ScreenTracking)

    /* ------------- Navigation Middleware ------------ */
    const navigationMiddleware = createReactNavigationReduxMiddleware(
      'root',
      state => state.nav
    )
    middleware.push(navigationMiddleware)
  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron ? Reactotron.createSagaMonitor : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))
  const store = createStore(rootReducer, compose(...enhancers))

  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
