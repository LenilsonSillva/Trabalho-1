import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FAIcons from 'react-native-vector-icons/FontAwesome';

export default function Reply() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnBottom} activeOpacity={0.9}>
                <FAIcons name="mail-reply" style={{color: 'rgb(90,90,90)'}}/>
                <Text style={{color: 'rgb(90,90,90)'}}>Responder</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBottom} activeOpacity={0.9}>
                <FAIcons name="mail-reply-all" style={{color: 'rgb(90,90,90)'}}/>
                <Text style={{color: 'rgb(90,90,90)'}}>Responder a todos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBottom} activeOpacity={0.9}>
                <FAIcons name="mail-forward" style={{color: 'rgb(90,90,90)'}}/>
                <Text style={{color: 'rgb(90,90,90)'}}>Encaminhar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnBottom: {
        height: 70,
        width: 150,
        padding: 5,
        marginHorizontal: 5,
        marginBottom: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'rgb(220,220,220)',
        justifyContent: 'center',
        alignItems: 'center'
    },
})
