import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function HomeScreen() {
    
    return (
        <View>
            <Text style={styles.greetings}>Hey, Julian!</Text>
            <Text style={styles.title}>Where would you like to travel today?</Text>
            <Text>Buttons</Text>
            <Text>Destinations</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    greetings: {
        color: '#A8A8A8',
        fontSize: 16
    },
    title: {
        color: '#26355A',
        marginVertical: 15,
        fontSize: 29,
        fontFamily: 'PlayfairDisplay_700Bold'
    },
})
