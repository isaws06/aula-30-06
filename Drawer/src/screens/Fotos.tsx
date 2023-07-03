import React from 'react';
import { View, StyleSheet, Button, Image, ScrollView, Text, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Fotos() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Curiosidades')
    }
  
    return (
    <View style={styles.container}>
         <Image style={styles.image1} source={require('../../assets/a1.jpg')}></Image>
    <Text style={styles.text}>Site do Aladim</Text>

      <ScrollView>
        <View style={styles.row}>
          <Image style={styles.image} source={require('../../assets/a2.jpg')}></Image>
          <Image style={styles.image} source={require('../../assets/a3.jpg')}></Image>
        </View>
        <View style={styles.row}>
          <Image style={styles.image} source={require('../../assets/a4.jpg')}></Image>
          <Image style={styles.image} source={require('../../assets/a5.jpg')}></Image>
        </View>
        <View style={styles.row}>
          <Image style={styles.image} source={require('../../assets/a6.jpg')}></Image>
          <Image style={styles.image} source={require('../../assets/a7.jpg')}></Image>
        </View>
        <View style={styles.row}>
          <Image style={styles.image} source={require('../../assets/a8.jpg')}></Image>
          <Image style={styles.image} source={require('../../assets/a9.png')}></Image>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.Button} onPress={openScreen}>
            <Text style={styles.buttonText}>Ver Curiosidades</Text>
          </TouchableOpacity>

         
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5EFE7',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image1:{
        width: 150,
        height: 150,
        borderRadius: 50,
        margin: 10, 
      },

      text:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#6B4F4F',
      },
    
      row: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      image: {
        width: 150,
        height: 150,
        margin: 10,
      },
      Button: {
        backgroundColor: '#4F709C',
        padding: 10,
        borderRadius: 5,
        width: '10%',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: '3%',
        shadowOffset: {
          width: 2,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },

      buttonText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'bold',
      },

})
