import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ReposList from './src/Screens/ReposList'
import RepoDetails from './src/Screens/RepoDetails'
import AddRepo from './src/Screens/AddRepo'
import AddButton from './src/components/AddButton'

const { Navigator, Screen } = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Navigator screenOptions={{ headerBackTitle: ' ' }}>
          <Screen name="ReposList" component={ReposList} options={{
            title: 'Github Stargazer',
            headerRight: () => <AddButton />
          }} />
          <Screen name="RepoDetails" component={RepoDetails} options={({ route: { params } }) => ({
            title: params?.name
          })} />
          <Screen name="AddRepo" component={AddRepo} options={{ title: 'Add repository' }} />
        </Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App