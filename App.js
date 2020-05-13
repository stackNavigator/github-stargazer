import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ReposList from './src/Screens/ReposList'
import AddRepo from './src/Screens/AddRepo'
import AddButton from './src/UI/AddButton'

const { Navigator, Screen } = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Navigator>
          <Screen name="ReposList" component={ReposList} options={{
            title: 'Github Stargazer',
            headerRight: () => <AddButton />
          }} />
          <Screen name="AddRepo" component={AddRepo} options={{
            title: 'Add repository',
            headerBackTitle: ' '
          }} />
        </Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App