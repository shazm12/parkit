import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import RazorpayCheckout from 'react-native-razorpay';

const API_URL = "http://localhost:3000";



const Payment = () => {
  const [email,setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const handlePayment = async() => {

    if(!cardDetails || !email) {
      Alert.alert("Please enter all the details");
      return;
    }
    const billingDetails = {
      email: email,

    }


  }
  return (
    <ScrollView>
      <Text style={styles.headerText}>Payment</Text>
        <View>
          <TextInput 
            autoCapitalize='none' 
            placeholder='email' 
            keyboardType='email-address'
            onChangeText={text => setEmail(text)} 
            style={{ alignSelf: 'center', marginTop: 20}}
          />
          <ScrollView horizontal={true}>
            <CardField
              postalCodeEnabled={true}
              placeholders={{
                number: "4242 4242 4242 4242"
              }}
              cardStyle={styles.cardContainer}
              style={{
                height: 50,
                marginVertical: 30,
                width: 600,
              }}
              onCardChange={(cardDetails) => {
                setCardDetails(cardDetails);
              }}
            />
          </ScrollView>
          <TouchableOpacity>
            <Text>Pay</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 60
  },
  payBtn: {
    alignSelf: 'center',
    marginTop: 35,
  }

})

export default Payment;