import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MIcon from 'react-native-vector-icons/MaterialIcons';

export default function SearchBar(props) {

    const dados = props.dados;

    return (
        <View style={styles.container}>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} placeholder='Pesquisar no e-mail' placeholderTextColor='rgb(90,90,90)'/>
                <View style={styles.iconsView}>
                    <TouchableOpacity style={styles.icon}>
                        <MIcon name='menu' size={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.photo}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>{'m'.toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.chatBox}>
                <Text style={{fontSize: 12, color: 'rgb(70,70,70)'}}>Caixa de Entrada</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 95
    },
    inputBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -5,
    },
    input: {
        flex: 1,
        backgroundColor: '#EEF2FB',
        borderRadius: 35,
        height: '67%',
        marginHorizontal: 15,
        paddingLeft: 50,
        fontSize: 16,
        color: 'rgb(70,70,70)',
    },
    icon: {
        marginLeft: 5
    },
    photo: {
        marginRight: 5,
        backgroundColor: 'rgb(100,149,237)',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconsView: {
        width: '90%',
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    chatBox: {
        marginBottom: 10,
        marginLeft: 15,
        top: 5,
    }
})
