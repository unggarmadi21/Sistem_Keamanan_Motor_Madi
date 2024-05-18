import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Alert, TextInput, TouchableHighlight, } from 'react-native';
import { getDatabase, ref, set, get, onValue } from "firebase/database";
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Button,
    useColorScheme,
    View,
} from 'react-native';
// import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore/lite';


import { db } from '../firebase/firebase-config';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


// const Separator = () => (
//     <View style={styles.separator} />
// );


const KontakMati = async () => {
    const menu = 'mati';
    const res = await set(ref(db, "cities/Kontak_motor"), {
        kontak_motor: menu,
    });

    console.log(res)
}
const KontakHidup = async () => {
    const menu = 'hidup';
    await set(ref(db, "cities/Kontak_motor"), {
        kontak_motor: menu,
    });
}

const StarterHidup = async () => {
    const menu = 'hidup';
    await set(ref(db, "cities/Starter_motor"), {
        starter_motor: menu,
    });
}
const StarterMati = async () => {
    const menu = 'mati';
    await set(ref(db, "cities/Starter_motor"), {
        starter_motor: menu,
    });
}


const TouchableHighlightExample = () => {
    const [count, setCount] = useState(0);
    const Press = () => setCount(count + 1);
}


const Fungsi = ({ navigation }) => {
    const [status, setStatus] = useState('mati')
    const GetData = async () => {
        const starCountRef = ref(db, 'cities/Kontak_motor');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setStatus(data?.kontak_motor);
        });
    }

    useEffect(() => {
        GetData()
    }, [])

    const [statusStarter, setStatusStarter] = useState('mati')
    const GetDataStarter = async () => {
        const starCountRef = ref(db, 'cities/Starter_motor');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setStatusStarter(data?.starter_motor);
        });
    }

    useEffect(() => {
        GetDataStarter()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    KONTAK MOTOR
                </Text>
                <Text style={styles.title}>{status}</Text>

                <View style={styles.fixToText}>
                    <Button
                        title="HIDUP"
                        color="#00ff00"
                        onPress={KontakHidup}
                    // onPress={() => Alert.alert('Kontak Motor Telah Dihidupkan')}

                    />
                    <Button
                        title="MATI"
                        color="#ff0000"
                        onPress={KontakMati}
                    // onPress={() => Alert.alert('Kontak Motor Telah Dimatikan')}
                    // onPress={Press}
                    />
                </View>
            </View>
            <View>
                <Text style={styles.title}>
                    STARTER MOTOR
                </Text>
                <Text style={styles.title}>{statusStarter}</Text>
                <View style={styles.fixToText}>
                    <Button
                        title="HIDUP"
                        color="#00ff00"
                        onPress={StarterHidup}
                    // onPress={() => Alert.alert('Mode Telah Dihidupkan')}
                    />
                    <Button
                        title="MATI"
                        color="#ff0000"
                        onPress={StarterMati}
                    // onPress={() => Alert.alert('Mode Telah Dimatikan')}
                    />
                </View>
            </View>
        </SafeAreaView >

    );
}


const Stack = createNativeStackNavigator();

function DetailsScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Halaman Menu" component={Fungsi} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        paddingHorizontal: 40,
    },
    fixToText: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        marginVertical: 20,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
export default DetailsScreen;