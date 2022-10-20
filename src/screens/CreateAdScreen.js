import { View, Text, StyleSheet } from 'react-native'
import React, { useState, } from 'react'
import { TextInput, Button } from 'react-native-paper';


const CreateAdScreen = () => {

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [year, setYear] = useState('')
    const [price, setPrice] = useState('')
    const [phone, setPhone] = useState('')

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

                mode="contained" onPress={() => console.log('Pressed')}>
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