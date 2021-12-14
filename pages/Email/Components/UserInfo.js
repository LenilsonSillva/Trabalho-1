import React, {useState, useEffect, useRef} from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';

export default function UserInfo(props) {

    const dados = props.dados
    const [arrowFx, setArrowFx] = useState(false)
    const rotation = new Animated.Value(0);

        const rotaOn = () => {
            Animated.timing(rotation, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false
            }).start();
            setTimeout(() => {
                setArrowFx(true)
            }, 300);
        };

        const rotaOff = () => {
            Animated.timing(rotation, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false
            }).start();
            setTimeout(() => {
                setArrowFx(false)
            }, 300);
        }

        const renderInfo = (showOrHide) => {
            if(showOrHide){
            return(
                <View style={styles.showDataView}>
                    <View style={{marginRight: 10}}>
                        <Text style={styles.textSpace}>De</Text>
                        <Text style={styles.textSpace}>Para</Text>
                        <Text style={styles.textSpace}>Data</Text>
                        <MIcon name='lock-outline' size={18} style={styles.textSpace}></MIcon>
                    </View>
                    <View>
                        <Text style={styles.textSpace}>{dados.from}</Text>
                        <Text style={styles.textSpace}>{dados.to}</Text>
                        <Text style={styles.textSpace}>{dados.time}</Text>
                        <Text style={styles.textSpace}>Criptografia padrão.</Text>
                    </View>
                </View>
            )
            } else {
                return null;
            }
        }

    return (
        <View>
        <View style={styles.container}>
            <View>
                <Image source={{ uri: dados.picture}} style={styles.senderPicture}/>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.senderName}>{dados.from}  <Text style={styles.timeView}>{dados.time}</Text></Text>
                <TouchableOpacity style={styles.toMeView} activeOpacity={1} onPress={arrowFx ? rotaOff : rotaOn}>
                    <Text style={styles.toMeText}>para {dados.to}</Text>
                    <Animated.View 
                    style={{transform: [{rotate: rotation.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '180deg'],
                                })
                            }]
                        }}
                    >
                        <Icon name="chevron-down-outline" style={{fontSize: 15}} color='grey'/>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        </View>
            {renderInfo(arrowFx)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    infoBox: {
        justifyContent: 'space-between',
    },
    toMeView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    senderPicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15
    },
    senderName: {
        fontSize: 15,
        fontFamily: 'QsSemiBold',
        marginTop: -3
    },
    toMeText: {
        color: 'rgb(90,90,90)',
        marginRight: 5,
    },
    timeView: {
        fontSize: 13,
        color: 'rgb(90,90,90)',
        fontWeight: 'normal',
        fontFamily: 'AssistantMedium'
    },
    showDataView: {
        flexDirection: 'row',
        borderColor: 'rgb(90,90,90)',
        marginTop: 15,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderRadius: 7
    },
    textSpace: {
        marginVertical: 4,
        color: 'rgb(90,90,90)'
    }
})
