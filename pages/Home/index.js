import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons';
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
                <Text style={{fontFamily: 'QsSemiBold',color: 'rgb(60,60,60)'}}>{item.to}</Text>
                <Text style={{color: 'rgb(90,90,90)'}}>{item.tittle}</Text>
                <Text style={{color: 'grey'}}>{item.summary}</Text>
            </View>
            <View style={styles.senderTimeFav}>
                <Text style={styles.timeText}>{item.time}</Text>
                <Icon name={item.star ? 'star' : 'star-outline'} style={{fontSize: 22}} color={item.star ? 'orange' : 'rgb(90,90,90)'}/>
            </View>
        </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
        <SearchBar dados={sender}/>
        <View>
            <FlatList
            data={sender}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
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
    }
  });