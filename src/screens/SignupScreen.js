import { View, Image, StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';




const SignupScreen = ({ navigation }) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userSignUp = async () => {
        if (!email || !password) {
            Alert.alert("Please fill all fields")
            return
        }
        try {
            const result = await auth().createUserWithEmailAndPassword(email, password)
            console.log(result)
        } catch (err) {
            Alert.alert("Something went wrong please try with differnt password")
        }

    }

    return (
        <KeyboardAvoidingView behavior='position'>
            {/* For Logo */}
            <View style={styles.box1}>
                <Image style={{ width: 200, height: 200, }} source={require("../assets/cnqlogo.png")} />

                <Text style={styles.text}>Please signup!</Text>
            </View>

            {/* For login buttons */}
            <View style={styles.box2}>

                <TextInput
                    label="Email"
                    value={email}
                    mode='outlined'
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    label="Password"
                    value={password}
                    mode='outlined'
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
                <Button mode="contained" onPress={() => userSignUp()}>
                    Signup
                </Button>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}>
                    <Text style={{ textAlign: 'center' }}>Login ?</Text>
                </TouchableOpacity>



            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    box1: {
        alignItems: 'center',
        backgroundColor: 'white'
    },
    box2: {
        paddingHorizontal: 40,
        justifyContent: 'space-evenly',
        height: '50%'
    },
    text: {
        fontSize: 22
    }


})

export default SignupScreen