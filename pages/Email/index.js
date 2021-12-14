import React, {useState, useEffect} from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Body from './Components/Body';
import Title from './Components/Title'
import UserInfo from './Components/UserInfo'

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
        <ScrollView style={styles.container}>
            <Title dados={data}/>
            <UserInfo dados={data}/>
            <Body dados={data}/>
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

