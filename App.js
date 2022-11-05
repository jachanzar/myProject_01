import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreenStack from './src/navigators/MainNavigator'

function App() {
  return (
    <NavigationContainer>
      <HomeScreenStack />
    </NavigationContainer>
  )
};

export default App;
