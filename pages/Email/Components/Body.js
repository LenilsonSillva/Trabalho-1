import React from 'react';
import { StyleSheet, View, useWindowDimensions, Dimensions, Text} from 'react-native';
import RenderHTML from "react-native-render-html";

export default function Body(props) {

    const dados = props.dados;
    const html = `<div style="font-size: 20px;">${dados.body}</div>`;
    const {width} = useWindowDimensions();

    return (
        <View style={styles.container}>
             <RenderHTML contentWidth={width} source={{html}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal: 10,
        flex: 1,
    },
    textBody: {
        fontSize: 18
    },
})
