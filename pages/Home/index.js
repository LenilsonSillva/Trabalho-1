import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchBar from './Components/SearchBar';

export default function Home({navigation}) {

    const [sender, setSender] = useState([]);

    useEffect(() => {
        async function getData(){
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails');
            const sender = await response.json();
            setSender(sender);
        }
        getData();
    }, []);

    function renderItem({item}){
        return (
        <TouchableOpacity
        style={styles.senderBox} 
        activeOpacity={0.99} 
        onPress={() => { navigation.navigate('Email', {id: item})}}
        >
            <View style={styles.senderImgBox}>
                <Image style={styles.senderImg}source={{uri: item.picture}}/>
            </View>
            <View style={styles.senderInfo}>
                <Text style={{fontFamily: 'AssistantMedium',color: 'rgb(80,80,80)', fontSize: 17}}>{item.to}</Text>
                <Text style={{color: 'rgb(90,90,90)', fontSize: 14}}>{item.tittle}</Text>
                <Text style={{color: 'grey'}}>{item.summary}</Text>
            </View>
            <View style={styles.senderTimeFav}>
                <Text style={styles.timeText}>{item.time}</Text>
                <Icon name={item.star ? 'star' : 'star-outline'} style={{fontSize: 20, fontWeight: 'bold'}} color={item.star ? 'orange' : 'rgb(90,90,90)'}/>
            </View>
        </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
        <View style={{flex: 1}}>
            <SearchBar dados={sender}/>
            <View>
                <FlatList
                data={sender}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
            </View>
        </View>
        <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', margin: 20}}>
            <TouchableOpacity style={styles.writeButton}>
                <MaterialCommunityIcons name="pencil-outline" size={23} color="black"/>
                <Text style={{marginLeft: 15, fontFamily: 'QsSemiBold', marginBottom: 5}}>Escrever</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: Constants.statusBarHeight
    },
    senderBox: {
        flex: 1,
        height: 100,
        flexDirection: 'row',
    },
    senderImg: {    
           width: 40,
           height: 40,
           borderRadius: 20
    },
    senderImgBox: {
        marginVertical: 20,
        marginHorizontal: 15,
    },
    senderInfo: {
        flex: 5,
        justifyContent: 'center'
    },
    senderTimeFav: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        padding: 10
    },
    timeText: {
        color: 'rgb(90,90,90)',
        fontSize: 12
    },
    writeButton: {
        backgroundColor: 'rgb(185,205,250)',
        flexDirection: 'row',
        height: 59,
        width: 135,
        borderRadius: 19.5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        shadowColor: 'black',
        elevation: 15,
        shadowOpacity: 0.2,
    }
  });