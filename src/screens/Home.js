import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { useAuthContext } from '../context/AuthContext';
import { useMallContext } from '../context/MallContext';
import { DataStore } from 'aws-amplify';
import { Blocks } from '../models';
const Home = ({ route , navigation }) => {
    const { userName } = useAuthContext();
    const {mallName, setMallName, parkingNo, setParkingNo, zone, setZone} = useMallContext();
    console.log(parkingNo);
    const response  = DataStore.query(Blocks);
    console.log(response);
    return (
    <View style={styles.container}>
        <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={{ fontSize: 19}}>, {userName && userName}</Text>

        </View>
        {parkingNo === undefined ? 
        (
            <>
                <View style={styles.parkedContainer}>
                    <Text style={styles.parkedTextContainer}>
                        You have already got your Parked Slot,
                        Please check your <Text style={{ fontWeight: "bold" }}>Parking Status</Text> to check your parking slot 
                        or use <Text style={{ fontWeight: "bold" }}>Payments</Text> to pay up your parking fee.
                    </Text>
                </View>
            </>
        )
    
        :
        (
            <>
                <View style={styles.locationText}>
                <Text style={styles.YouText}>You</Text>
                <Text style={styles.areText}>are at</Text>
                <Text style={styles.dataText}>{mallName && mallName}</Text>
                </View>
                <View style={styles.parkingTextContainer}>
                    <Text style={styles.parkingText}> Your parking space is at: </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{ fontSize:20, fontWeight: 'bold', textAlign:'center', marginLeft: 60, paddingVertical: 30 }}>Zone {zone}</Text>
                        <View style={{ backgroundColor: "#121212", height: 20, width: 20, borderRadius: 25, marginLeft: 5, marginTop: -3}} />
                    </View>
                    <Image style={styles.carImg} source={require('../../assets/car-icon.png')} />
                    <Text style={{textAlign: 'center',fontSize: 22,fontWeight: "bold", marginTop: 8}}>Slot {parkingNo}</Text>
                </View>
            </>
        )
        
        }

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    welcomeText: {
        fontWeight: "bold",
        fontSize: 19,

    },
    welcomeTextContainer: {
        flexDirection: 'row',
        marginTop: 70,
        alignItems: 'flex-end',
        marginLeft: 150,
        justifyContent: 'flex-end',
    },
    locationText : {
        flexDirection: 'row',
        marginTop: 60,
        alignItems: 'center',
    },
    YouText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    areText: {
        font: 20,
        fontWeight: "600",
        marginTop: 6,
        marginLeft: 4,
    },
    dataText: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 6,
        marginLeft: 4,
    },
    parkingTextContainer: {
        marginTop: 100,
    },
    parkingText: {
        fontSize: 18,
        justifyContent: 'center',
        alignItems:'center',
    },
    carImg: {
        alignItems: 'center',
        alignSelf: 'center',
        height:200,
        width: 200,
        marginBottom: 20,
        
    },
    parkedContainer: {
        marginTop: 100,
        width : 250,
        
    },
    parkedTextContainer: {
        textAlign: 'center',
        fontSize: 18,
        letterSpacing: 0.5,
    }
})

export default Home;