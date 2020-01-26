import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

    return(
        <View style={styles.headerBar}> 
            <Text>ToDo Application </Text>
        </View>
    );
}

const styles=StyleSheet.create({

    headerBar:{
        backgroundColor:'#f38f4a',
        fontSize:24,
        fontWeight:'bold',
        marginTop:20,
        padding:20,
        textAlign:'center',
        color:'white'
    }
});