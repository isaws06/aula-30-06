import React from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity, Image} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';

type ParamsProps = {
    name: string
}

export function Curiosidades() {
    
    const route = useRoute();
   
    
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Fotos')
    }
  
    return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/a1.jpg')}></Image>
    <Text style={styles.text}>Site do Aladim</Text>
<br />
    <Text style={styles.text1}>Curiosidades</Text>
    <br />
    <Text style={styles.titulo1}>
      <span style={styles.bold}>Idade:</span> 9 anos
      <br />
      <span style={styles.bold}>Peso:</span> 5kg
      <br />
      <span style={styles.bold}>Comida Favorita:</span> Banana
      <br />
      <span style={styles.bold}>Brinquedo Favorito:</span> Um macaco de pelúcia
      <br />
      <span style={styles.bold}>Outras Curiosidades:</span> Consegue sentir o cheiro de banana de longe, <br />
      parece um hidrante de tanto que mija, 
      gosta de dormir de conchinha, <br />
      ODEIA que pessoas estranhas entrem no banheiro da casa, <br />
      não tem noção do seu proprio tamanho e tenta avançar em cachorros que são <br />o triplo 
      do  seu tamanho, ele é meio suicida tanto que já pulou de um beliche e 
      ele é tarado por braços.
   </Text>
<br />

        <TouchableOpacity style={styles.Button} onPress={openScreen}>
            <Text style={styles.buttonText}>Ver fotos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Voltar para a home</Text>
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
   
      text:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#6B4F4F',
      },

      text1:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6B4F4F',
        textAlign: 'left',
      },

      bold:{
        fontWeight: 'bold',
      },

      titulo1:{
        fontSize: 15,
        textAlign: 'center',
        color: '#6B4F4F',
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

      image:{
        width: 250,
        height: 250,
        borderRadius: 50,
        margin: 10,  
      },
})
