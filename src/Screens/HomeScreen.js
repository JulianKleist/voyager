import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Buttons from "../Components/Buttons";
import Destination from '../Components/Destination';

export default function HomeScreen() {
    
    return (
        <View>
            <View style={styles.titleCont}>
                <Text style={styles.greetings}>Hey, Julian!</Text>
                <Text style={styles.title}>Where would you like to travel today?</Text>
            </View>
            <Buttons />
            <Destination />
        </View>
    )
}

const styles = StyleSheet.create({
    titleCont: {
        marginTop: '35%',
        marginHorizontal: 30
    },
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
