import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore'






const ListItemScreen = () => {


    const getDetails = async () => {
        const querysnap = await firestore().collection('ads').get()
        const result = querysnap.docs.map(docSnap => docSnap.data())
        setItems(result)

        console.log(result)
    }

    useEffect(() => {
        getDetails()
        return () => {
            console.log("cleanUp code")
        }
    }, [])

    const [items, setItems] = useState([])


    const myitems = [
        {
            name: "iPhone",
            year: "2017",
            phone: "8875659176",
            image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aSUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            desc: "i am selling this iphone"
        },

        {
            name: "Camera",
            year: "2022",
            phone: "9868456656",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            desc: "selling this brand new camera"
        },

    ]

    const renderItem = (item) => {
        return (
            <Card style={styles.card}>

                <Card.Title title={item.name} />

                <Card.Content>
                    <Paragraph>{item.desc}</Paragraph>
                    <Paragraph>{item.year}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: item.image }} />
                <Card.Actions>
                    <Button>{item.price}</Button>
                    <Button>Call Seller</Button>
                </Card.Actions>
            </Card>
        )
    }

    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.phone}
                renderItem={({ item }) => renderItem(item)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        margin: 10,
        elevation: 2
    }
})

export default ListItemScreen