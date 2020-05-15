import { AppRegistry, Platform } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

import withRedux from './src/hoc/withRedux'

// Polyfill to make Android locale string work.
if (Platform.OS === 'android') {
  require('intl')
  require('intl/locale-data/jsonp/en-US')
}

AppRegistry.registerComponent(appName, () => withRedux(App))