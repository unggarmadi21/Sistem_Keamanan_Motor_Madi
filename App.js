import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OneSignal from 'react-native-onesignal';
// import React, { useEffect } from 'react';
// import { authentication } from './firebase/firebase-config';

// import DetailsScreen from './screens/DetailsScreen';
import AuthStack from './navigation/AuthStack';

const App = () => {
  // useEffect(() => {
  //OneSignal Init Code
  OneSignal.setLogLevel(6, 0);
  OneSignal.setAppId('84c1a03a-b229-4f07-85de-6d3536134013');
  //END OneSignal Init Code
  //Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler(notification => {
    console.log('OneSignal: notification opened:', notification);
  });
  // }, []);

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;