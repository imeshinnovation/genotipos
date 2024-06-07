import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import CSS from '../CSS'

export default function Main() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Genotipos</Text>
            <Text style={styles.subtitle}>Proyecto de Ciencias</Text>
            <View style={styles.integra}>
                <Text style={styles.subtitle}>Curso 9A</Text>
                <Text style={styles.f16}>Dylan Rubio</Text>
                <Text style={styles.f16}>Santiago Aya</Text>
                <Text style={styles.f16}>Gerónimo Milanés</Text>
                <Text style={styles.f16}>Jeronimo Rodríguez</Text>
                <View style={{
                    alignItems: 'center',
                }}>
                    <Text style={{
                        marginTop: 20,
                        fontFamily: 'Poppins_500Medium',
                        color: '#def'
                    }}>George Washington School, Sede Calera</Text>
                    <Text style={{
                        fontFamily: 'Poppins_500Medium',
                        color: '#def'
                    }}>2024</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.boton}
                onPress={()=>{
                    navigation.navigate('Medidor')
                }}
            >
                <Text style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'Poppins_300Light'
                }}>Continuar</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.compose(CSS)