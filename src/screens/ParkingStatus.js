import { View, Text, StyleSheet,Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DataStore } from 'aws-amplify';
import { Mall, Parking } from '../models';
import { useAuthContext } from '../context/AuthContext';
import { useMallContext } from '../context/MallContext';

const ParkingStatus = ({navigation}) => {
  const [parkingQueues, setParkingQueues] = useState({});
  const {email, setEmail, userName, setUserName, userId, setUserId} = useAuthContext();
  const {mallName, setMallName, parkingNo, setParkingNo, zone, setZone} = useMallContext();
  useEffect(() => {
    const getParkings = async() => {
      const response = await DataStore.query(Parking, (parking) => parking.customerName.eq(userName));
      setParkingQueues(response);
      console.log(parkingQueues);

    }
    getParkings();
  },[]);


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}><Text style={styles.largeBoldText}>Your</Text> Parking Queue</Text>
      <View style={styles.parkingStackContainer}>
        {parkingQueues.length > 0 ? 
          parkingQueues.map((parking) => {
            if(parking?.parkZone!== null && parking.parkNo !== null) {
              return(
                
                  <View style={styles.parkingSlotContainer}>
                    <View style={{ justifyContent: 'center', marginRight: 12}}>
                      <Image style={{ height: 64, width: 64, marginLeft: -20,}} source={require('../../assets/icons8-parking-ticket-96.png')} />
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'center'}}>
                      <Text>Zone {parking?.parkZone} : Slot {parking?.parkNo}</Text>
                      <Text>Arrived at: {parking?.toa}</Text>
                      <Text>Status: {parking?.status}</Text>
                    
                    </View>
                  </View>
                
              )
            }
          })
          
        :
        (<>
          <Text>No Parking Queues Yet</Text>
        </>)}
      </View>
      
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  largeBoldText: {
    fontSize:32,
    fontWeight: "bold"
  },
    headerText: {
      fontSize: 18,
      marginTop: 60,
      textAlign: 'center'
  },
  parkingStackContainer: {
    marginTop: 40,
  },
  parkingSlotContainer: {
    padding: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    zIndex: 1000,
    flexDirection: 'row',
    marginVertical: 10,
    alignSelf: 'center'
  }
});

export default ParkingStatus;