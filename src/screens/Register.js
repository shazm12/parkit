import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import { Auth } from 'aws-amplify';


const Register = ({ navigation }) => {


  const {email,setEmail} = useAuthContext();
  const {userName,setUserName} = useAuthContext();
  const [password, setPassword] = useState(null);
  const onSignUpPress = async() => {
        try {
            const { user } = Auth.signUp({
                username: email,
                password,
                attributes: {email, preferred_username: userName}
            })
            console.log(user);
            navigation.navigate("RegisterConfirmScreen",{ email: email });
        }
        catch(err){
            Alert.alert("Oops, ",e.message);
        }
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 100, fontSize: 20}}> <Text style={{ fontWeight: 'bold', fontSize: 22}}>Let's</Text> get you started...</Text>
        <View style={{ marginTop: 120 }}>
        <TextInput style={styles.inputTextHolder} placeholder='Username' onChangeText={(text) => setUserName(text)} />
        <TextInput style={styles.inputTextHolder} secureTextEntry={true} placeholder='Password' onChangeText={(text) => setPassword(text)} />
        <TextInput style={styles.inputTextHolder} placeholder='Email' onChangeText={(text) => setEmail(text)} />
        <TouchableOpacity 
            style={styles.submitButton}
            onPress={() => onSignUpPress()}
            >
            <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
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
export default Register;