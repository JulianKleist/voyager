import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function Buttons() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonBox}>
            <View style={styles.activeButton}>
              <MaterialIcons name="flight" size={28} color="#4BDBCE" />
            </View>
            <Text style={styles.texts}>Flight</Text>
          </View>
          <View style={styles.buttonBox}>
            <View style={styles.buttons}>
              <MaterialIcons name="train" size={28} color="#717ACE" />
            </View>
            <Text style={styles.texts}>Train</Text>
          </View>
          <View style={styles.buttonBox}>
            <View style={styles.buttons}>
              <MaterialIcons name="directions-boat" size={28} color="#FF724C" />
            </View>
            <Text style={styles.texts}>Cruise</Text>
          </View>
          <View style={styles.buttonBox}>
            <View style={styles.buttons}>
              <MaterialIcons name="directions-bus" size={28} color="#F4BF00" />
            </View>
            <Text style={styles.texts}>Bus</Text>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 25
  },
  buttonBox: {
    alignItems: 'center'
  },
  texts: {
    color: '#596581',
    fontSize: 12
  },
  buttons: {
    backgroundColor: '#F5F5F5',
    height: 60,
    width: 60,
    marginBottom: 3,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeButton: {
    backgroundColor: '#E9FEFC',
    height: 60,
    width: 60,
    marginBottom: 3,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
})