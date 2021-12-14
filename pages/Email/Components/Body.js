import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Body(props) {

    const dados = props.dados;

    return (
        <View style={styles.container}>
            <Text style={styles.textBody}>{dados.body}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal: 10,
    },
    textBody: {
        fontSize: 18
    }
})
