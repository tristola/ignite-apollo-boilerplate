import Config from '../Config/DebugConfig'
import Reactotron from 'reactotron-react-native'
import sagaPlugin from 'reactotron-redux-saga'
import apisaucePlugin from 'reactotron-apisauce'

if (Config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!
  Reactotron
    .configure({ name: 'Ignite App' })
    .useReactNative()
    .use(sagaPlugin())
    .use(apisaucePlugin({}))
    .connect()

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron
}
