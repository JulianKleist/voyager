import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Destination() {
  return (
    <View>
      <Text style={styles.title2}>Top Destination</Text>
      <View style={styles.destination}>
        <View style={{borderRadius: 15}}>
          <ImageBackground source={require('../Assets/BA.jpg')} imageStyle={{ borderRadius: 15}} style={styles.image}>
            <Text style={styles.destTittle}>Puerto Madero</Text>
            <View style={{flexDirection: 'row', marginLeft: 6}}>
              <EvilIcons name="location" size={20} color="white" />
              <Text style={styles.destLoc}>Buenos Aires, Argentina</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.destStar}>
                <MaterialIcons name="star" size={15} color="#6F8099" />
                <Text style={{fontSize: 12, color: '#6F8099'}}> 4.8 </Text>
              </View>
              <MaterialIcons style={styles.destDropdown} name="keyboard-arrow-down" size={24} color="white" />
            </View>
          </ImageBackground>
        </View>

        <View style={{borderRadius: 15, marginLeft: 15}}>
            <ImageBackground source={require('../Assets/BA.jpg')} imageStyle={{ borderRadius: 15}} style={styles.image}>
                <Text style={styles.destTittle}>Puerto Madero</Text>
                <View style={{flexDirection: 'row', marginLeft: 6}}>
                <EvilIcons name="location" size={20} color="white" />
                <Text style={styles.destLoc}>Buenos Aires, Argentina</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <View style={styles.destStar}>
                    <MaterialIcons name="star" size={15} color="#6F8099" />
                    <Text style={{fontSize: 12, color: '#6F8099'}}> 4.8 </Text>
                </View>
                <MaterialIcons style={styles.destDropdown} name="keyboard-arrow-down" size={24} color="white" />
                </View>
            </ImageBackground>
        </View>
      </View>
      <View style={styles.destination2}>
        <View style={{borderRadius: 15}}>
            <ImageBackground source={require('../Assets/BA.jpg')} imageStyle={{ borderRadius: 15}} style={styles.image}>
                <Text style={styles.destTittle}>Puerto Madero</Text>
                <View style={{flexDirection: 'row', marginLeft: 6}}>
                <EvilIcons name="location" size={20} color="white" />
                <Text style={styles.destLoc}>Buenos Aires, Argentina</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <View style={styles.destStar}>
                    <MaterialIcons name="star" size={15} color="#6F8099" />
                    <Text style={{fontSize: 12, color: '#6F8099'}}> 4.8 </Text>
                </View>
                <MaterialIcons style={styles.destDropdown} name="keyboard-arrow-down" size={24} color="white" />
                </View>
            </ImageBackground>
        </View>
        
        <View style={{borderRadius: 15, marginLeft: 15}}>
            <ImageBackground source={require('../Assets/BA.jpg')} imageStyle={{ borderRadius: 15}} style={styles.image}>
                <Text style={styles.destTittle}>Puerto Madero</Text>
                <View style={{flexDirection: 'row', marginLeft: 6}}>
                <EvilIcons name="location" size={20} color="white" />
                <Text style={styles.destLoc}>Buenos Aires, Argentina</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <View style={styles.destStar}>
                    <MaterialIcons name="star" size={15} color="#6F8099" />
                    <Text style={{fontSize: 12, color: '#6F8099'}}> 4.8 </Text>
                </View>
                <MaterialIcons style={styles.destDropdown} name="keyboard-arrow-down" size={24} color="white" />
                </View>
            </ImageBackground>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title2: {
        color: '#26355A',
        marginVertical: 15,
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 30
    },
    destination: {
        marginLeft: 30,
        flexDirection: 'row',
    },
    destination2: {
        marginLeft: 30,
        flexDirection: 'row',
        marginTop: 15
    },
    image: {
        height: 200,
        width: 140,
    },
    destTittle: {
        color: 'white',
        fontSize: 14,
        marginTop: 7,
        marginLeft: 11
    },
    destLoc: {
        fontSize: 11,
        color: 'white',
        flex: 1,
        flexWrap: 'wrap'
    },
    destStar: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 20,
        marginLeft: 9,
        borderRadius: 15,
        marginTop: '82%'
    },
    destDropdown: {
        marginTop: '82%',
        marginLeft: '33%'
    }
})