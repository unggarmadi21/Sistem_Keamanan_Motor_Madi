// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Alert, TextInput, } from 'react-native';
// import {
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     Button,
//     useColorScheme,
//     View,
// } from 'react-native';
// import { FAB } from 'react-native-paper';
// import MapView, { Marker } from 'react-native-maps';

// const Maps = ({ navigation }) => {
//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <MapView style={{ flex: 1 }} >
//                 <Marker
//                     description="Lokasi Motor"
//                     coordinate={{ latitude: -6.3444406, longitude: 106.7348349 }}
//                 />
//             </MapView>
//             <FAB
//                 style={styles.fab}
//                 // small
//                 icon="plus"
//                 // icon={{ source: { uri: '' }, direction: 'rtl' }}
//                 // icon={{ source: "add-a-photo", direction: 'rtl' }}
//                 onPress={() => console.log('Pressed')}
//             />
//         </SafeAreaView>

//     );
// }

// const Stack = createNativeStackNavigator();

// function MapsScreen() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Maps" component={Maps} />
//         </Stack.Navigator>
//     );

// }

// const styles = StyleSheet.create({
//     fab: {
//         position: 'absolute',
//         margin: 16,
//         right: 0,
//         bottom: 0,
//     },
//     wrapper: {
//         ...StyleSheet.absoluteFillObject,
//     },
//     map: {
//         ...StyleSheet.absoluteFillObject,
//     },
// })
// export default MapsScreen;

