import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from './components/header-component/header';

export default function App() {
  return (
    <View style={styles.container}>
       <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
   // justifyContent: 'center',
    marginTop:22
  },
  
  headerBar:{
    backgroundColor:'#4ab0f3',
    fontSize:25,
    padding:20
  }
});
