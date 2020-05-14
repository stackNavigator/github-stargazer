import { AppRegistry, Platform } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

// Polyfill to make Android locale string work.
if (Platform.OS === 'android') {
  require('intl')
  require('intl/locale-data/jsonp/en-US')
}

AppRegistry.registerComponent(appName, () => App)