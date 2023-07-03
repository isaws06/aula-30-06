import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text, Image} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Home() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Fotos')
    }
  
    return (
    <View style={styles.container}>
         <Image style={styles.image} source={require('../../assets/a1.jpg')}></Image>
        <Text style={styles.text}>Bem-vindo ao Site do Aladim!</Text>
    <br />
    <Text style={styles.titulo1}>Nesse site adoramos o Aladim e contemplamos sua beleza suprema, <br />
    com suas perninhas tortas, ele consegue alcançar alturas inimagináveis, <br />
    inclusive o seu coração!  </Text>
    <br />
       <TouchableOpacity style={styles.Button} onPress={openScreen}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EFE7",
        justifyContent: "center",
        alignItems: "center"
    },

    Button: {
        backgroundColor: '#4F709C',
        padding: 10,
        borderRadius: 5,
        width: '10%',
        alignItems: 'center',
        marginTop: 15,
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

      text:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#6B4F4F',
      },
    
      titulo1:{
        fontSize: 14,
        textAlign: 'center',
        color: '#6B4F4F',
      },

      image:{
        width: 300,
        height: 320,
        borderRadius: 50,
        marginBottom: 20, 
 
        
      }
})
