import React , {useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const[applicationName,setApplicationName]=useState("Save Valet");

  const[item,setItem]=useState('Story book');

 // const[counter,setCounter]=useState(1);

  const bookList=()=>{
    setItem('Novel Book');
  }

  /*
  const counter=()=>{
    setCounter(setCounter()++);
  }
  */
  return (
    <View style={styles.container}>
      <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.hearder_text}>{applicationName}</Text>
        </View>

        <View style={styles.body}>
              <Button title="Book Store" onPress={bookList} />
        </View>

        <View>
              <Text style={styles.fontbody}>{item}</Text>
        </View>

      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'white',
   // alignItems: 'center',
   // justifyContent: 'center',
   // paddingTop:12,
     marginTop:12
  },
  header:{
    backgroundColor:'#348ee3',
    padding:12,
  },
  hearder_text:{
    fontSize:26,
    //Colors:'#fffdfd',
    paddingLeft:12
  },
  body:{
    padding:20,
    backgroundColor:'white'
    
  },
  fonttitle:{
    fontSize:20
  },

  fontbody:{
    fontSize:16,
    paddingLeft:20
  }
});
