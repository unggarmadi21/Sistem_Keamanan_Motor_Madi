import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import DetailsScreen from '../screens/DetailsScreen';
// import MapsScreen from '../screens/MapsScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
            <Stack.Screen name="Menu" component={DetailsScreen} />
            {/* <Stack.Screen name="Maps" component={MapsScreen} /> */}
        </Stack.Navigator>
    );
};

export default AuthStack;