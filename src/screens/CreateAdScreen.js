import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState, } from 'react'
import { TextInput, Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'



const CreateAdScreen = () => {

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [year, setYear] = useState('')
    const [price, setPrice] = useState('')
    const [phone, setPhone] = useState('')

    const postData = async () => {
        if (!name || !desc || !year || !price || !phone) {
            Alert.alert("All values required")
        } else {
            try {
                await firestore().collection('ads')
                    .add({
                        name,
                        desc,
                        year,
                        phone,
                        price,
                        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
                        uid: auth().currentUser.uid
                    })
                Alert.alert("Posted your ad!")
                setName('')
                setDesc('')
                setYear('')
                setPhone('')
                setPrice('')

            } catch (err) {
                console.log(err)
                Alert.alert("Something went wrong, please try again")
            }


        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create Ad!</Text>
            <TextInput
                label="Ad title"
                value={name}
                mode='outlined'
                onChangeText={text => setName(text)}
            />

            <TextInput
                label="Describe what you are selling"
                value={desc}
                mode='outlined'
                numberOfLines={3}
                multiline={true}
                onChangeText={text => setDesc(text)}
            />

            <TextInput
                label="Year of Purchase"
                value={year}
                mode='outlined'
                keyboardType='numeric'
                onChangeText={text => setYear(text)}
            />
            <TextInput
                label="Price in INR"
                value={price}
                mode='outlined'
                keyboardType='numeric'
                onChangeText={text => setPrice(text)}
            />

            <TextInput
                label="Your contact number"
                value={phone}
                mode='outlined'
                keyboardType='numeric'
                onChangeText={text => setPhone(text)}
            />

            <Button icon='camera'
                mode="contained" onPress={() => console.log('Pressed')}>
                Upload a Image
            </Button>


            <Button
                mode="contained" onPress={() => postData()}>
                Post
            </Button>

        </View>
    )
}


styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        justifyContent: 'space-evenly'

    }
    , text: {
        fontSize: 22,
        textAlign: 'center'

    }

})
export default CreateAdScreen