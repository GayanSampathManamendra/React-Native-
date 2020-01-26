import React , {useState} from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';

export default function App() {

  const [name,setName]=useState('Null');
  const [address,setAddress]=useState('Null');
  const [telephone,setTelephone]=useState('Null');


  return (
    <View style={styles.container}>
      <View style={styles.hedderbar}>
          <Text style={styles.hedderTitle}>User Inputs </Text>
      </View>
      
      <View style={styles.mainContent}>
            <TextInput 
              style={styles.userInputs}
              keyboardAppearance='default'
              placeholder=' Name With Initials '
              onChangeText={(value)=>setName(value)}
            />
      </View>
      <View style={styles.mainContent}>
            <TextInput
              multiline
              style={styles.userInputs}
              placeholder=' Permenent Address ( Multiline )'
              onChangeText={(value)=>setAddress(value)}
            />
      </View>
      <View style={styles.mainContent}>
            <TextInput
              keyboardType="number-pad"
              style={styles.userInputs}
              placeholder=' Mobile Number ( Only Numbers )'
              onChangeText={(value)=>setTelephone(value)}
            />
      </View>
      <View style={styles.resultContent}>
        <Text>Name       :  {name}</Text>
        <Text>Address  :   {address}</Text>
        <Text>Mobile     :   {telephone}</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 // alignItems: 'center',
 // justifyContent: 'center',
    marginTop:25
  },

  hedderbar:{
    backgroundColor:'#348ee3',
    padding:10
  },

  hedderTitle:{
    fontSize:26,
    paddingLeft:70
  },

  mainTitle:{
    fontSize:28,
    paddingLeft:20
  },
  mainContent:{
    paddingLeft:20,
    paddingRight:20,
    paddingTop:20,
    paddingBottom:0.005
    
  },
  userInputs:{
    borderWidth:2,
    borderColor:'#b5b8ba',
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    padding:5
  },

  resultContent:{
    paddingTop:30,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    fontSize:16
  }

});
