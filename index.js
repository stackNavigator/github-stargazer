import { AppRegistry, Platform } from 'react-native'
import 'mobx-react-lite/batchingForReactNative'

import store from './src/store'
import App from './App'
import { name as appName } from './app.json'
import withStore from './src/hoc/withStore'

// Polyfill to make Android locale string work.
if (Platform.OS === 'android') {
  require('intl')
  require('intl/locale-data/jsonp/en-US')
}

AppRegistry.registerComponent(appName, () => withStore(store, App))