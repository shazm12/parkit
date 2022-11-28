import { Auth } from 'aws-amplify';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuthContext } from '../context/AuthContext.js';
const Login = ({ navigation }) => {

    const {userName, setUserName, email, setEmail, userId, setUserId } = useAuthContext();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const onSignInPress = async() => {
      if(loading) {
        return;
      }
      setLoading(true);
      try {
        const user = await Auth.signIn(email,password);
        setUserId(user?.attributes?.sub);
        setUserName(user?.attributes?.preferred_username);
        navigation.navigate("LocatorScreen");
      }
      catch(err) {
        Alert.alert("Oops, ",err.message);
      }
      setLoading(false);
    }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row'}}>
        <Text style={styles.headerText}>ParkIt</Text>
        <Text style={{fontSize: 40, marginTop: -10, marginLeft: 10}}>🚗</Text>
      </View>
      
      <View>
        <TextInput style={styles.inputTextHolder} placeholder='Username' onChangeText={(text) => setEmail(text)} />
        <TextInput style={styles.inputTextHolder} secureTextEntry={true} placeholder='Password' onChangeText={(text) => setPassword(text)} />
        <TouchableOpacity 
            style={styles.submitButton}
            onPress={() => onSignInPress()}
            >
            <Text style={styles.submitButtonText}>{loading ? "Loading" : "Submit"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
           < Text style={{ color: "#121212", fontSize: 16, alignSelf: 'center', marginTop: 10}}>New Here?</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerText: {
        fontSize: 40,
        letterSpacing: 2,
        fontWeight: "bold",
        marginBottom: 50,
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
export default Login