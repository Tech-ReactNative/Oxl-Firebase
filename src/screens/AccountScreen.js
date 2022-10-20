import { View, Text } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import { TextInput, Button } from 'react-native-paper';


const AccountScreen = () => {
    return (
        <View>
            <Text>{auth().currentUser.email}</Text>

            <Button
                mode="contained" onPress={() => auth().signOut()}>
                Logout
            </Button>
        </View>
    )
}

export default AccountScreen