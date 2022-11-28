import { View, Text, StyleSheet,TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { Auth } from 'aws-amplify';
import { useAuthContext } from '../context/AuthContext';

const RegisterConfirm = ({navigation}) => {
  const [code, setCode ] = useState();
  const {email} = useAuthContext();

  const onConfirmEmailPress = async() => {
    try {
        const response = await Auth.confirmSignUp(email,code);
        navigation.navigate("LoginScreen");
    }
    catch(err) {
        Alert.alert("Oops, ",err.message);
    }
  }

  return (
    <View style={styles.container}>
        <Text style={{ marginTop: 120, width: 300, textAlign: 'center', }}>You have received a <Text style={{ fontSize: 14, fontWeight: 'bold' }}>confirmation code</Text>, please enter it to confirm your mail...</Text>
       <TextInput style={styles.inputTextHolder} placeholder='enter your code' onChangeText={(text) => setCode(text)} />
       <TouchableOpacity 
            style={styles.submitButton}
            onPress={() => onConfirmEmailPress()}
            >
            <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    inputTextHolder: {
        padding: 5,
        paddingHorizontal: 50,
        borderWidth: 1,
        marginVertical: 5,
        borderColor: "#121212",
    
    },
    submitButton: {
        padding: 10,
        backgroundColor: "#121212",
        justifyContent: 'center',
        color: "#ddd",
        borderRadius: 5,
        marginVertical: 12,
    },
    submitButtonText: {
        color: "#eeeeee",
        fontSize: 16,
        textAlign: 'center',      
    }
})

export default RegisterConfirm;