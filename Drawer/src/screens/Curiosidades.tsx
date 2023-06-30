import React from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';

type ParamsProps = {
    name: string
}

export function Curiosidades() {
    
    const route = useRoute();
    const { name } = route.params as ParamsProps;
    
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Home')
    }
  
    return (
    <View style={styles.container}>
        <Text style={styles.text}>
            { name }
        </Text>

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
        color: "#fff",
    },

    Button: {
        backgroundColor: '#4F709C',
        padding: 8,
        borderRadius: 5,
        width: '30%',
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
})