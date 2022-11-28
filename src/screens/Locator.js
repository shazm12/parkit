import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { DataStore } from '@aws-amplify/datastore';
import moment from 'moment/moment';
import { Mall, Blocks, Parking, ParkingStatus } from '../models';
import { useMallContext } from '../context/MallContext';
import { useAuthContext } from '../context/AuthContext';
const Locator = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const {mallName, setMallName, parkingNo, setParkingNo, zone, setZone} = useMallContext();
    const {userName,userId } = useAuthContext();
    const [scanned, setScanned] = useState(false);
    const handleNav = () => {
        navigation.navigate("MainScreen", {data: "Parked" });
    }
    useEffect(() => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();

        setHasPermission(status === 'granted');
        })();
    }, []);
    const handleBarCodeScanned = async({ type, data }) => {
        setScanned(true);
        const mallName = data.slice(0, data.length-2);
        const response = await DataStore.query(Mall, (mall) => mall.serialNo.eq(mallName));
        const {name,id,parkingSpaces} = response[0];
        const parkingSpacesNumber = Number(parkingSpaces);
        await DataStore.save(Mall.copyOf(response[0],(updated) =>{
            updated.parkingSpaces = (parkingSpacesNumber -1).toString();

        }));
        await setMallName(name);
        await setParkingNo(parkingSpacesNumber.toString());
        await setZone("A");
        try {
            const response = await DataStore.save(
                new Parking({
                    "customerName":userName,
                    "toa": moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'),
                    "tod": "",
                    "status": ParkingStatus.PARKED,
                    "mallName": mallName,
                    "parkZone": zone,
                    "parkNo": parkingNo
                })
            );
            if(response) {
                navigation.navigate("MainScreen");
            }
        }
         catch(err) {
            Alert.alert("Error: ",err.message);
            return;
        }
        
    };
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>Please Scan the QR code in front of the Machine</Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.scanner]}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        <TouchableOpacity style={{
            zIndex: 1000,
            marginBottom: 50,
            padding: 15,
            borderRadius: 5,
            backgroundColor: "#121212",


        }}
        onPress={handleNav}>
            <Text style={{ color: "#fff" }}> Already Parked?</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: "#efefef",
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    scanner: {
        borderRadius: 5,
        zIndex: -100,
    },
    headerText: {
        flex: 1,
        zIndex: 1000,
        marginTop: 100,
        fontSize: 12,
        fontWeight: "bold"

    }
    
})
export default Locator;