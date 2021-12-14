import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/Home';
import Email from './pages/Email'

const Stack = createStackNavigator()

export default function App() {

  let [fontsLoaded] = useFonts({
    'Arial': require('./assets/fonts/Arial.ttf'),
    'AssistantMedium': require('./assets/fonts/AssistantMedium.ttf'),
    'QsSemiBold': require('./assets/fonts/QsSemiBold.ttf')
  });

  if(!fontsLoaded){
    return <AppLoading/>
  } else
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" backgroundColor="white"/>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Email" component={Email} options={{title: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
