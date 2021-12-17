import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Title(props) {

    const dados = props.dados
    
    return (
        <View style={styles.container}>
            <View style={styles.firstView}>
                <Text><View><Text style={styles.titleText}>{dados.tittle}</Text></View><View><Text style={styles.enterText}>Caixa de entrada</Text></View></Text>
            </View>
            <View style={styles.secondView}>
                <Icon name={dados.star ? 'star' : 'star-outline'} style={{fontSize: 20}} color={dados.star ? 'orange' : 'rgb(90,90,90)'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 40,
        paddingTop: 5,
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    firstView: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    secondView: {
    },
    titleText: {
        fontSize: 24,
        fontFamily: 'AssistantMedium',
        top: 4.5, 
        marginRight: 4
    },
    enterText: {
        fontSize: 11,
        marginTop: 5, 
        borderColor: 'rgb(225,225,225)',
        borderWidth: 1.25,
        borderRadius: 4.5,
        paddingLeft: 2.5,
        marginRight: 5,
        backgroundColor: 'rgb(240,243,240)'
    }
})
