import React, {useState, useEffect} from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import Body from './Components/Body';
import Title from './Components/Title'
import UserInfo from './Components/UserInfo'
import Reply from './Components/Reply';

export default function Email({route}) {

    const {id} = route.params;

    const [data, setData] = useState([])
        
        useEffect(() => {
            const getData = async() => {
                const response = await fetch(`https://mobile.ect.ufrn.br:3002/emails/${id.id}`);
                const data = await response.json();
                setData(data);
            }
            getData();
        }, []);

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}>
            <Title dados={data}/>
            <UserInfo dados={data}/>
            <Body dados={data}/>
            <View><Reply/></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 7
    }
})

